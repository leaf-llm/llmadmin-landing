export type PluginCategoryId =
  | "security"
  | "optimization";

export type Plugin = {
  id: string;
  name: string;
  category: PluginCategoryId;
  description: string;
  effect: string;
  tags: string[];
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
  // ===== 内置护栏与工具 =====
  {
    id: "default",
    name: "Default",
    category: "security",
    description:
      "AI 网关默认内置的护栏与转换函数集合,无需任何凭证即可启用。",
    effect: "21+ 内置函数(正则、计数、JSON 校验、Webhook 等)",
    tags: ["模型路由", "正则匹配", "JWT 验证", "Webhook"],
  },

  // ===== 托管护栏套件 =====
  {
    id: "qualifire",
    name: "Qualifire",
    category: "security",
    description:
      "Qualifire.ai 托管护栏套件,提供内容审核、PII、提示注入、幻觉与合规策略等多维检测。",
    effect:
      "7 项函数:contentModeration / hallucinations / pii / promptInjections / grounding / toolUseQuality / policy",
    tags: ["内容审核", "PII 检测", "提示注入", "幻觉检测", "合规策略"],
    link: "https://qualifire.ai",
  },
  {
    id: "portkey",
    name: "Portkey",
    category: "security",
    description:
      "Portkey 托管护栏,覆盖内容审核、语言识别、PII 与垃圾内容过滤。",
    effect: "4 项函数:moderateContent / language / pii / gibberish",
    tags: ["内容审核", "PII 检测", "语言检测", "垃圾内容"],
    link: "https://portkey.ai",
  },
  {
    id: "patronus",
    name: "Patronus",
    category: "security",
    description:
      "Patronus AI 评测套件,12 项函数覆盖 PII、礼貌性、性别与种族偏见、检索质量与毒性。",
    effect:
      "12 项评测函数:phi / pii / isConcise / isHelpful / isPolite / noApologies / noGenderBias / noRacialBias / retrievalAnswerRelevance / retrievalHallucination / toxicity / custom",
    tags: ["PII 检测", "幻觉检测", "偏见检测", "检索质量", "礼貌用语"],
    link: "https://patronus.ai",
  },
  {
    id: "azure",
    name: "Azure AI Content Safety",
    category: "security",
    description:
      "Azure AI 内容安全,提供内容审核、PII、提示盾与受保护材料检测。",
    effect:
      "4 项函数:contentSafety / pii / shieldPrompt / protectedMaterial",
    tags: ["内容审核", "PII 检测", "提示注入", "受保护内容"],
    link: "https://azure.microsoft.com/en-us/products/ai-content-safety",
  },
  {
    id: "promptfoo",
    name: "Promptfoo",
    category: "security",
    description:
      "Promptfoo 红队与护栏,专注提示注入、PII 与有害内容防护。",
    effect: "3 项函数:guard / pii / harm",
    tags: ["提示注入", "PII 检测", "有害内容"],
    link: "https://promptfoo.dev",
  },
  {
    id: "pangea",
    name: "Pangea",
    category: "security",
    description: "Pangea AI Guard,提供提示注入防护与 PII 检测。",
    effect: "2 项函数:textGuard / pii",
    tags: ["提示注入", "PII 检测", "内容审核"],
    link: "https://pangea.cloud",
  },

  // ===== 单一用途护栏 =====
  {
    id: "aporia",
    name: "Aporia",
    category: "security",
    description:
      "Aporia 护栏,针对幻觉、提示注入与合规策略进行实时校验。",
    effect: "单一函数 validateProject",
    tags: ["提示注入", "幻觉检测", "合规策略"],
    link: "https://aporia.com",
  },
  {
    id: "sydelabs",
    name: "SydeLabs",
    category: "security",
    description:
      "SydeGuard 风险评分,识别提示注入、越狱与毒性内容。",
    effect: "单一函数 sydeguard",
    tags: ["提示注入", "毒性检测", "逃逸检测"],
    link: "https://sydelabs.ai",
  },
  {
    id: "pillar",
    name: "Pillar",
    category: "security",
    description:
      "Pillar Security,对提示与响应双向扫描,覆盖注入、PII、秘密与毒性。",
    effect: "2 项函数:scanPrompt / scanResponse",
    tags: ["提示注入", "PII 检测", "秘密检测", "毒性检测"],
    link: "https://pillar.security",
  },
  {
    id: "mistral",
    name: "Mistral",
    category: "security",
    description: "Mistral 内容审核模型,提供内容安全与 PII 检测。",
    effect: "单一函数 moderateContent",
    tags: ["内容审核", "PII 检测"],
    link: "https://mistral.ai",
  },
  {
    id: "bedrock",
    name: "AWS Bedrock",
    category: "security",
    description:
      "AWS Bedrock 内容审核护栏,单一 guard 函数覆盖内容安全与 PII。",
    effect: "单一函数 guard",
    tags: ["内容审核", "PII 检测"],
    link: "https://aws.amazon.com/bedrock/",
  },
  {
    id: "acuvity",
    name: "Acuvity",
    category: "security",
    description:
      "Acuvity 综合扫描器,多检测器覆盖越狱、PII、秘密与恶意 URL。",
    effect: "单一函数 Acuvity(内置多检测器)",
    tags: ["提示注入", "越狱检测", "PII 检测", "秘密检测", "恶意 URL"],
    link: "https://acuvity.ai",
  },
  {
    id: "lasso",
    name: "Lasso Security",
    category: "security",
    description:
      "Lasso Security,基于分类的越狱检测与自定义策略护栏。",
    effect: "单一函数 classify",
    tags: ["越狱检测", "内容审核", "自定义策略"],
    link: "https://lasso.security",
  },
  {
    id: "panw-prisma-airs",
    name: "Palo Alto Prisma AIRS",
    category: "security",
    description:
      "Palo Alto Networks Prisma AI 运行时安全,拦截提示注入、PII 与恶意内容。",
    effect: "单一函数 intercept",
    tags: ["提示注入", "PII 检测", "恶意内容"],
    link: "https://www.paloaltonetworks.com/prisma/ai-runtime-security",
  },
  {
    id: "walledai",
    name: "Walled AI",
    category: "security",
    description:
      "Walled AI 防护,提供内容审核、PII 与合规策略检测。",
    effect: "单一函数 walledprotect",
    tags: ["内容审核", "PII 检测", "合规策略"],
    link: "https://walled.ai",
  },
  {
    id: "javelin",
    name: "Javelin",
    category: "security",
    description:
      "Javelin AI 安全护栏,覆盖提示注入、语言检测与信任安全。",
    effect: "单一函数 guardrails",
    tags: ["提示注入", "语言检测", "信任安全"],
    link: "https://javelin.ai",
  },
  {
    id: "f5-guardrails",
    name: "F5 Guardrails",
    category: "security",
    description:
      "F5 Guardrails(由 CalypsoAI 驱动),扫描内容审核与 PII。",
    effect: "单一函数 scan",
    tags: ["内容审核", "PII 检测"],
    link: "https://www.f5.com",
  },
  {
    id: "crowdstrike-aidr",
    name: "CrowdStrike AIDR",
    category: "security",
    description:
      "CrowdStrike AIDR,守护聊天补全,覆盖提示注入与 PII 脱敏。",
    effect: "单一函数 guardChatCompletions",
    tags: ["提示注入", "内容审核", "PII 脱敏"],
    link: "https://www.crowdstrike.com",
  },
  {
    id: "promptsecurity",
    name: "Prompt Security",
    category: "security",
    description:
      "Prompt Security,对提示与响应双向防护,聚焦注入与内容审核。",
    effect: "2 项函数:protectPrompt / protectResponse",
    tags: ["提示注入", "内容审核"],
  },

  // ===== 请求转换器 =====
  {
    id: "exa",
    name: "Exa",
    category: "optimization",
    description:
      "Exa.ai 网络搜索集成,将检索结果注入提示以增强上下文。",
    effect: "转换器函数 online",
    tags: ["Web 搜索", "上下文增强"],
    link: "https://exa.ai",
  },
  {
    id: "promptcache",
    name: "Prompt Cache",
    category: "optimization",
    description:
      "Anthropic 提示缓存标记注入,自动添加 cache_control 标记以降低成本。",
    effect: "转换器函数 promptCache",
    tags: ["提示缓存", "成本优化"],
  },
];

export function getAllPlugins(): Plugin[] {
  return PLUGINS;
}

export function getPluginsByCategory(category: PluginCategoryId): Plugin[] {
  return PLUGINS.filter((p) => p.category === category);
}
