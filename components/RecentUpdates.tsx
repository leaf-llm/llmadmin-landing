import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdCheckCircle, MdBuild, MdSpeed } from "react-icons/md";
import type { ReleaseEntry } from "@/utils/releaseLog";

const GROUP_CONFIG = {
  added: {
    label: "新增",
    Icon: MdCheckCircle,
    iconColor: "text-[#2d5a27]",
  },
  fixed: {
    label: "修复",
    Icon: MdBuild,
    iconColor: "text-[#5c5f5e]",
  },
  improved: {
    label: "优化",
    Icon: MdSpeed,
    iconColor: "text-[#154212]",
  },
} as const;

const DATE_FORMATTER = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function formatDate(entry: ReleaseEntry): string {
  if (entry.isPending || !entry.dateObj) return "pre-release";
  return DATE_FORMATTER.format(entry.dateObj);
}

function hasAnyGroup(entry: ReleaseEntry): boolean {
  const { added, fixed, improved } = entry.groups;
  return added.length > 0 || fixed.length > 0 || improved.length > 0;
}

export default function RecentUpdates({ entries }: { entries: ReleaseEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <section
      id="updates"
      className="py-20 px-4 md:px-6 bg-[#f0f3ff]/30 border-t border-[#72796e]/5"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#151c27] mb-4">最近更新</h2>
          <div className="w-16 h-1 bg-[#2d5a27] mx-auto rounded-full" />
          <p className="text-[#5c5f5e] mt-6">持续迭代，与你一起成长。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <article
              key={entry.version}
              className="bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)] flex flex-col"
            >
              <header className="mb-6">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#154212]">
                      {entry.version}
                    </span>
                    {entry.isPending && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#ffb0cc]/40 text-[#60233e]">
                        pre-release
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
                </div>
                <div className="w-10 h-0.5 bg-[#2d5a27]/20 rounded-full" />
              </header>

              {hasAnyGroup(entry) ? (
                <div className="space-y-5 flex-1">
                  {(Object.keys(GROUP_CONFIG) as Array<keyof typeof GROUP_CONFIG>).map(
                    (key) => {
                      const items = entry.groups[key];
                      if (items.length === 0) return null;
                      const { label, Icon, iconColor } = GROUP_CONFIG[key];
                      return (
                        <div key={key}>
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-[#151c27] mb-2">
                            <Icon className={`w-4 h-4 ${iconColor}`} />
                            {label}
                          </h4>
                          <ul className="space-y-1.5 pl-6">
                            {items.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-[#5c5f5e] leading-relaxed list-disc marker:text-[#72796e]/40"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    },
                  )}
                </div>
              ) : (
                <p className="text-sm text-[#5c5f5e] flex-1">无变更说明</p>
              )}
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/release-log"
            className="inline-flex items-center gap-2 text-[#2d5a27] font-semibold hover:underline underline-offset-4 transition-colors"
          >
            查看完整更新日志
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
