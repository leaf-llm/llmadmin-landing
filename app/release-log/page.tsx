import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllReleases, type ReleaseEntry, type ReleaseGroups } from "@/utils/releaseLog";

export const metadata: Metadata = {
  title: "更新日志 - LLM Admin",
  description: "LLM Admin 版本更新日志,记录每一次迭代与改进。",
};

const DATE_FORMATTER = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const GROUP_ORDER: Array<{ key: keyof ReleaseGroups; label: string; color: string }> = [
  { key: "added", label: "新增", color: "border-[#2d5a27] bg-white" },
  { key: "fixed", label: "修复", color: "border-[#5c5f5e] bg-[#f0f3ff]" },
  { key: "improved", label: "优化", color: "border-[#154212] bg-[#f0f3ff]" },
];

function formatDate(entry: ReleaseEntry): string {
  if (entry.isPending || !entry.dateObj) return "pre-release";
  return DATE_FORMATTER.format(entry.dateObj);
}

function ReleaseSection({ entry, isLatest }: { entry: ReleaseEntry; isLatest: boolean }) {
  return (
    <article className="bg-white border border-[#72796e]/5 rounded-2xl soft-shadow overflow-hidden">
      <header className="flex flex-wrap items-center justify-between gap-4 p-6 md:p-8 border-b border-[#72796e]/5">
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-2xl font-bold text-[#154212]">{entry.version}</h2>
          {entry.isPending && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#ffb0cc]/40 text-[#60233e]">
              pre-release
            </span>
          )}
          {!entry.isPending && isLatest && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#2d5a27]/10 text-[#2d5a27]">
              最新
            </span>
          )}
        </div>
        {entry.isPending ? (
          <span className="text-sm text-[#5c5f5e]">pre-release</span>
        ) : (
          <time
            dateTime={entry.date}
            className="text-sm text-[#5c5f5e]"
          >
            {formatDate(entry)}
          </time>
        )}
      </header>

      <div className="p-6 md:p-8 space-y-4">
        {GROUP_ORDER.map(({ key, label, color }) => {
          const items = entry.groups[key];
          if (items.length === 0) return null;
          return (
            <div
              key={key}
              className={`border-l-4 ${color} rounded-r-lg p-4`}
            >
              <h3 className="text-sm font-semibold text-[#151c27] mb-2">{label}</h3>
              <ul className="space-y-1.5">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[#5c5f5e] leading-relaxed flex gap-2"
                  >
                    <span className="text-[#72796e]/40 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default function ReleaseLog() {
  const releases = getAllReleases();

  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <Navigation />
      <div className="max-w-[900px] mx-auto px-4 md:px-6 py-32">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#151c27] mb-4">
            更新日志
          </h1>
          <div className="w-16 h-1 bg-[#2d5a27] mx-auto rounded-full" />
          <p className="text-[#5c5f5e] mt-6 max-w-xl mx-auto">
            记录 LLM Admin 的每一次迭代，见证产品成长。
          </p>
        </div>

        {releases.length === 0 ? (
          <p className="text-center text-[#5c5f5e]">暂无更新日志</p>
        ) : (
          <div className="space-y-8">
            {releases.map((entry, idx) => {
              // pre-release 项永远视为"最新",其余按数组下标
              const isLatest = entry.isPending || idx === 0;
              return (
                <ReleaseSection
                  key={entry.version}
                  entry={entry}
                  isLatest={isLatest}
                />
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
