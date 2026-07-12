export type PluginCategoryId =
  | "security"
  | "optimization";

export type Plugin = {
  id: string;
  name: string;
  category: PluginCategoryId;
  description: string;
  effect: string;
  link?: string;
};

export const CATEGORIES: ReadonlyArray<{
  id: PluginCategoryId;
  label: string;
  description: string;
}> = [
  {
    id: "security",
    label: "安全防护",
    description: "内容审核、PII 检测、提示注入防护等多维安全护栏插件。",
  },
  {
    id: "optimization",
    label: "内容优化",
    description: "在请求前或响应后修改内容，实现搜索增强、缓存优化、模型专属格式化等能力。",
  },
];

export const GITHUB_PLUGINS_BASE =
  "https://github.com/leaf-llm/llmadmin-core/tree/main/plugins";

const PLUGINS: Plugin[] = [
  // ===== 安全防护 =====
  {
    id: "default",
    name: "Default",
    category: "security",
    description:
      "AI 网关默认内置护栏，提供开箱即用的安全防护预设套餐，无需任何凭证即可启用。",
    effect: "- PII 检测\n- 提示词注入防御\n- 内容审核\n- 长度限制\n- URL 黑名单\n- SSRF 防护",
  },

  // ===== 内容优化 =====
  {
    id: "promptcache",
    name: "Prompt Cache",
    category: "optimization",
    description:
      "自动为请求附加 Anthropic cache_control 标记，启用提示词缓存以降低 API 成本。",
    effect: "- 系统提示词缓存\n- 文档上下文缓存",
  },
  {
    id: "claude-stego-detector",
    name: "Claude Stego Detector",
    category: "optimization",
    description:
      "移除 Claude Code 在代理转发时插入请求中的隐写信号，使其不会到达上游模型。请求将被放行，不做拦截。",
    effect: "- Claude 隐写清除",
  },
];

export function getAllPlugins(): Plugin[] {
  return PLUGINS;
}

export function getPluginsByCategory(category: PluginCategoryId): Plugin[] {
  return PLUGINS.filter((p) => p.category === category);
}
