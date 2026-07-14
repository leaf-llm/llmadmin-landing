import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "博客 - LLM Admin",
  description:
    "LLM Admin 技术博客：AI 网关、模型路由、提示工程、安全防护与行业洞察。",
  keywords: ["LLM Admin", "AI 网关", "Claude Code", "提示工程", "安全分析"],
};

const POSTS = [
  {
    slug: "claude-code-backdoor",
    title:
      "Claude Code 隐藏后门曝光：XOR 混淆 + 隐写术监控用户 - 原理分析与解决方案",
    excerpt:
      "深度逆向 Claude Code 二进制，揭示其自 v2.1.91 起通过 XOR 混淆代码与 Unicode 隐写术秘密监控用户时区与代理设置，并提供 LLM Admin 插件一键消除方案。",
    date: "2026-07-10",
    dateLabel: "2026 年 7 月 10 日",
    readTime: "12 分钟",
    tags: ["Claude Code", "后门", "XOR 混淆", "隐写术"],
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <Navigation />
      <div className="max-w-[900px] mx-auto px-4 md:px-6 py-32">
        <div className="space-y-8">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-[#72796e]/10 rounded-2xl p-6 md:p-8 soft-shadow hover:-translate-y-1 transition-transform duration-300 hover:border-[#2d5a27]/20 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <time
                  dateTime={post.date}
                  className="text-sm text-[#5c5f5e]"
                >
                  {post.dateLabel}
                </time>
                <span className="text-sm text-[#5c5f5e]">·</span>
                <span className="text-sm text-[#5c5f5e]">
                  阅读约 {post.readTime}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-[#151c27] mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-[#5c5f5e] leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-[#f0f7ee] text-[#154212]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
