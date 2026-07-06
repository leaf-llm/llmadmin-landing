import fs from "fs";
import path from "path";

export type ReleaseGroups = {
  added: string[];
  fixed: string[];
  improved: string[];
};

export type ReleaseEntry = {
  version: string;
  date: string;
  dateObj: Date | null;
  isPending: boolean;
  groups: ReleaseGroups;
};

const HEADER_RE = /^#\s+(v\S+)\s+\(([^)]+)\)\s*$/;

function classifyLine(line: string, groups: ReleaseGroups): void {
  const trimmed = line.trim();
  if (!trimmed) return;

  // 去掉可能的前缀符号("- "、"* " 等)
  const cleaned = trimmed.replace(/^[-*]\s+/, "");

  if (cleaned.startsWith("新增:") || cleaned.startsWith("新增：")) {
    groups.added.push(cleaned.replace(/^新增[:：]\s*/, "").trim());
  } else if (cleaned.startsWith("修复:") || cleaned.startsWith("修复：")) {
    groups.fixed.push(cleaned.replace(/^修复[:：]\s*/, "").trim());
  } else if (cleaned.startsWith("优化:") || cleaned.startsWith("优化：")) {
    groups.improved.push(cleaned.replace(/^优化[:：]\s*/, "").trim());
  } else {
    // 无前缀的行默认归到"新增"
    groups.added.push(cleaned);
  }
}

export function parseReleaseLog(content: string): ReleaseEntry[] {
  // 按空行(一个或多个连续空行)分割为块
  const blocks = content.split(/\n\s*\n/);

  const entries: ReleaseEntry[] = [];

  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    const header = lines[0];
    const match = header.match(HEADER_RE);
    if (!match) continue;

    const version = match[1];
    const dateRaw = match[2].trim();
    const isPending = dateRaw === "待发布";
    const dateObj = isPending ? null : new Date(dateRaw);
    const date = isPending ? "待发布" : dateRaw;

    const groups: ReleaseGroups = { added: [], fixed: [], improved: [] };
    for (let i = 1; i < lines.length; i++) {
      classifyLine(lines[i], groups);
    }

    entries.push({ version, date, dateObj, isPending, groups });
  }

  // 排序规则:
  // - 待发布项永远在最前
  // - 其余按发布日期降序(最新在前)
  entries.sort((a, b) => {
    if (a.isPending && !b.isPending) return -1;
    if (!a.isPending && b.isPending) return 1;
    if (a.isPending && b.isPending) return 0;
    return b.dateObj!.getTime() - a.dateObj!.getTime();
  });

  return entries;
}

export function getAllReleases(): ReleaseEntry[] {
  const filePath = path.join(process.cwd(), "RELEASE.md");
  const content = fs.readFileSync(filePath, "utf-8");
  return parseReleaseLog(content);
}

export function getRecentReleases(count: number): ReleaseEntry[] {
  return getAllReleases().slice(0, count);
}
