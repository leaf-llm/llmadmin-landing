import type { Metadata } from "next";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CATEGORIES,
  GITHUB_PLUGINS_BASE,
  getPluginsByCategory,
  type Plugin,
} from "@/utils/plugins";

export const metadata: Metadata = {
  title: "插件 - LLM Admin",
  description: "LLM Admin 网关支持的多款安全防护与内容优化插件，按场景分组展示。",
};

function PluginCard({ plugin }: { plugin: Plugin }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 hover:border-[#2d5a27]/20 hover:shadow-xl flex flex-col">
      <h3 className="text-xl font-semibold text-[#151c27] mb-2">{plugin.name}</h3>
      <p className="text-sm text-[#5c5f5e] mb-1">{plugin.description}</p>
      <p className="text-xs text-[#72796e] font-mono mb-4">{plugin.effect}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {plugin.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#2d5a27]/10 text-[#2d5a27]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-auto">
        {plugin.link && (
          <a
            href={plugin.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#2d5a27] hover:text-[#154212] transition-colors"
          >
            访问官网 <MdOpenInNew className="w-4 h-4" />
          </a>
        )}
        <a
          href={`${GITHUB_PLUGINS_BASE}/${plugin.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[#2d5a27] hover:text-[#154212] transition-colors"
        >
          <FaGithub className="w-4 h-4" /> 源码
        </a>
      </div>
    </div>
  );
}

export default function PluginsPage() {
  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <Navigation />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-32">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#151c27] mb-4">
            插件生态
          </h1>
          <div className="w-16 h-1 bg-[#2d5a27] mx-auto rounded-full" />
          <p className="text-[#5c5f5e] mt-6 max-w-xl mx-auto">
            多款安全防护与内容优化插件，按场景分组，灵活组合你的 AI 网关策略。
          </p>
        </div>

        <div className="space-y-20">
          {CATEGORIES.map((cat) => {
            const items = getPluginsByCategory(cat.id);
            if (items.length === 0) return null;
            return (
              <section key={cat.id}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[#154212] mb-2">
                    {cat.label}
                  </h2>
                  <div className="w-12 h-0.5 bg-[#2d5a27]/40 rounded-full mb-3" />
                  <p className="text-xs text-[#72796e] leading-relaxed max-w-xl">
                    {cat.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((plugin) => (
                    <PluginCard key={plugin.id} plugin={plugin} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
