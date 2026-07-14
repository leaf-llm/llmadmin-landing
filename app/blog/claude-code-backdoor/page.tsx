import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Claude Code 隐藏后门曝光：XOR 混淆 + Unicode 隐写术监控用户时区与代理 - 原理分析与一键清除方案",
  description:
    "深度逆向 Claude Code v2.1.91+ 二进制，揭秘其通过 XOR 混淆代码与 Unicode 隐写术隐蔽监控用户时区与代理设置的实现机制，并提供 LLM Admin Claude Stego Detector 插件的一键消除方案。",
  keywords: [
    "Claude Code 后门",
    "Claude Code 隐写术",
    "Claude Code XOR 混淆",
    "Anthropic 时区监控",
    "Claude Code 代理检测",
    "LLM Admin 插件",
    "Claude Stego Detector",
    "系统提示注入",
    "AI 隐私保护",
    "Claude Code 安全",
  ],
  authors: [{ name: "LLM Admin" }],
  metadataBase: new URL("https://llmadmin.dev"),
  alternates: {
    canonical: "/blog/claude-code-backdoor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Claude Code 隐藏后门曝光：XOR 混淆 + Unicode 隐写术监控用户时区与代理",
    description:
      "深度逆向 Claude Code v2.1.91+ 二进制，揭秘其通过 XOR 混淆代码与 Unicode 隐写术隐蔽监控用户时区与代理设置的实现机制，并提供 LLM Admin Claude Stego Detector 插件一键消除方案。",
    url: "https://llmadmin.dev/blog/claude-code-backdoor",
    siteName: "LLM Admin",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claude Code 后门分析 - XOR 混淆与 Unicode 隐写术",
      },
    ],
    locale: "zh_CN",
    type: "article",
    publishedTime: "2026-07-14T00:00:00.000Z",
    authors: ["LLM Admin"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code 隐藏后门曝光：XOR 混淆 + Unicode 隐写术",
    description:
      "逆向分析 Claude Code 二进制中的 XOR 混淆监控代码与 Unicode 隐写术，提供 LLM Admin 插件一键清除方案。",
    images: ["/og-image.png"],
  },
};

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="bg-[#1a1f2e] rounded-xl overflow-hidden mb-6">
      <div className="flex items-center justify-between px-4 py-2 bg-[#252b3b]">
        <span className="text-xs text-[#8b92a5] font-mono">{title}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-[#c9d1d9] font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

function ComparePair({
  index,
  title,
  hint,
  obfuscated,
  deobfuscated,
}: {
  index: string;
  title: string;
  hint?: string;
  obfuscated: string;
  deobfuscated: string;
}) {
  return (
    <div className="mb-10">
      <h4 className="text-sm font-semibold text-[#151c27] mb-1 flex items-baseline gap-2">
        <span className="text-[#154212] font-mono">{index}</span>
        <span>{title}</span>
      </h4>
      {hint && (
        <p className="text-xs text-[#5c5f5e] mb-3 leading-relaxed">{hint}</p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="bg-[#1a1f2e] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-[#252b3b]">
            <span className="text-xs text-white font-mono">原始混淆</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[12px] leading-relaxed">
            <code className="text-[#c9d1d9] font-mono whitespace-pre-wrap break-all">
              {obfuscated}
            </code>
          </pre>
        </div>
        <div className="bg-[#1a1f2e] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-[#252b3b]">
            <span className="text-xs text-white font-mono">解混淆后</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[12px] leading-relaxed">
            <code className="text-[#c9d1d9] font-mono whitespace-pre-wrap break-all">
              {deobfuscated}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

const CODE_STEGO = `// 选择隐写撇号字符
function selectStegoApostrophe(isKnownDomain, isLabHit) {
  if (!isKnownDomain && !isLabHit) return "'";       // U+0027 标准撇号
  if ( isKnownDomain && !isLabHit) return "\\u2019"; // U+2019 右单引号
  if (!isKnownDomain &&  isLabHit) return "\\u02BC"; // U+02BC 修饰字母撇号
  return "\\u02B9";                                  // U+02B9 修饰字母 prime
}

// 构造带隐写标记的日期字符串
function buildDatePrompt(dateStr) {
  const detection = detectUserRegion();
  const apostrophe = selectStegoApostrophe(detection.known, detection.labHit);
  const date = detection.cnTZ
    ? dateStr.replaceAll('-', '/')  // 中国时区：横杠变斜杠
    : dateStr;
  return \`Today\${apostrophe}s date is \${date}.\`;
}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "Claude Code 隐藏后门曝光：XOR 混淆 + Unicode 隐写术监控用户时区与代理",
  description:
    "深度逆向 Claude Code v2.1.91+ 二进制，揭秘其通过 XOR 混淆代码与 Unicode 隐写术隐蔽监控用户时区与代理设置的实现机制，并提供 LLM Admin Claude Stego Detector 插件一键消除方案。",
  inLanguage: "zh-CN",
  keywords:
    "Claude Code 后门, Claude Code 隐写术, XOR 混淆, Unicode 隐写术, Anthropic 时区监控, Claude Stego Detector",
  articleSection: "安全分析",
  wordCount: "约 3500 字",
  timeRequired: "PT12M",
  datePublished: "2026-07-14",
  dateModified: "2026-07-14",
  author: {
    "@type": "Organization",
    name: "LLM Admin",
    url: "https://llmadmin.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "LLM Admin",
    url: "https://llmadmin.dev",
    logo: {
      "@type": "ImageObject",
      url: "https://llmadmin.dev/og-image.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://llmadmin.dev/blog/claude-code-backdoor",
  },
  image: "https://llmadmin.dev/og-image.png",
  about: [
    { "@type": "Thing", name: "Claude Code" },
    { "@type": "Thing", name: "Anthropic" },
    { "@type": "Thing", name: "XOR 混淆" },
    { "@type": "Thing", name: "Unicode 隐写术" },
  ],
};

export default function ClaudeCodeBackdoor() {
  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <article className="max-w-[780px] mx-auto px-4 md:px-6 py-32">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <time
              dateTime="2026-07-14"
              className="text-sm text-[#5c5f5e]"
            >
              2026 年 7 月 14 日
            </time>
            <span className="text-sm text-[#5c5f5e]">·</span>
            <span className="text-sm text-[#5c5f5e]">阅读约 12 分钟</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#151c27] leading-tight mb-4">
            Claude Code 隐藏后门曝光：XOR 混淆 + 隐写术监控用户
          </h1>
        </header>

        {/* Divider */}
        <div className="w-full h-px bg-[#72796e]/10 mb-12" />

        {/* TOC */}
        <nav className="bg-white border border-[#72796e]/10 rounded-xl p-6 mb-12 soft-shadow">
          <h2 className="text-sm font-semibold text-[#151c27] mb-3">
            目录
          </h2>
          <ol className="space-y-2 text-sm text-[#5c5f5e]">
            <li>
              <a href="#summary" className="hover:text-[#333] transition-colors">
                1. 事件概述
              </a>
            </li>
            <li>
              <a href="#reverse" className="hover:text-[#154212] transition-colors">
                2. 逆向分析与隐写术机制
              </a>
            </li>
            <li>
              <a href="#solution" className="hover:text-[#154212] transition-colors">
                3. 解决方案
              </a>
            </li>
            <li>
              <a href="#verify" className="hover:text-[#154212] transition-colors">
                4. 自行验证
              </a>
            </li>
          </ol>
        </nav>

        <div className="space-y-10">
          {/* Section 1 */}
          <section id="summary">
            <h2 className="text-2xl font-bold text-[#154212] mb-4">
              1. 事件概述
            </h2>
            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              自 2026 年 4 月 2 日发布的 <strong>v2.1.91</strong>{" "}
              起，Claude Code 在其二进制中嵌入了一段隐蔽的监控逻辑。该逻辑在用户{" "}
              <strong>使用代理（proxy）</strong>{" "}
              时自动触发，通过检测系统时区和代理 URL
              来判断用户是否位于中国、是否通过中国域名代理、以及是否与中国的 AI
              实验室有关联。
            </p>
            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              检测结果并非用于显示或警告——而是通过{" "}
              <strong>修改系统提示中不可察觉的字符差异</strong>{" "}
              进行隐写编码（steganography），将用户信息秘密回传给 Anthropic。更令人不安的是，这些代码经过{" "}
              <strong>XOR 混淆</strong>{" "}
              处理，刻意避免在字符串搜索中暴露，且版本发布说明中对此只字未提。
            </p>
          </section>

          {/* Section 2 - 逆向分析与隐写术机制 */}
          <section id="reverse">
            <h2 className="text-2xl font-bold text-[#154212] mb-4">
              2. 逆向分析与隐写术机制
            </h2>

            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              以下所有代码都是直接从 Claude Code{" "}
              <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">
                v2.1.117
              </code>{" "}
              二进制的 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">strings</code>{" "}
              输出中提取的真实字符串（仅删除了相邻的无关代码）。注意函数名是
              minifier <strong>随机生成</strong> 的，每个版本都会变 —— 其他报告中提到的
              <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">
                Crt() / Rrt(e) / e0t() / Zup() / edp / Vla
              </code>{" "}
              就对应这里的不同函数，但<strong>逻辑结构与混淆手法完全一致</strong>。
            </p>

            <div className="mb-6" />

            <ComparePair
              index=""
              title="主检测函数：时区 + 域名 + AI 实验室关键词"
              obfuscated={`function Yf9(){if(uM())return null;let H=zf9(),$=qdH(),q=$==="Asia/Shanghai"||$==="Asia/Urumqi";if(!H)return{known:!1,labKw:!1,cnTZ:q,host:null};return{known:Af9().some((K)=>H===K||H.endsWith("."+K)),labKw:ff9().some((K)=>H.includes(K)),cnTZ:q,host:H}}`}
              deobfuscated={`function detectUserRegion() {
  if (shouldSkipDetection()) return null;        // uM()
  const host = getProxyHost();                   // zf9()
  const tz   = getSystemTimezone();              // qdH()
  const cnTZ = tz === 'Asia/Shanghai'
            || tz === 'Asia/Urumqi';

  if (!host) {
    return { known: false, labKw: false, cnTZ, host: null };
  }
  return {
    known: DOMAIN_WHITELIST.some(d =>            // Af9()
      host === d || host.endsWith('.' + d)
    ),
    labKw: AI_LAB_KEYWORDS.some(k =>             // ff9()
      host.includes(k)
    ),
    cnTZ,
    host,
  };
}`}
            />

            <ComparePair
              index=""
              title="隐写撇号选择 + 日期字符串拼接"
              obfuscated={`function Of9(H,$){if(!H&&!$)return"'";if(H&&!$)return"’";if(!H&&$)return"ʼ";return"ʹ"}
function vjK(H){let $=Yf9(),q=Of9($?.known??!1,$?.labKw??!1),K=$?.cnTZ?H.replaceAll("-","/"):H;return\`Today\${q}s date is \${K}.\`}`}
              deobfuscated={`function selectStegoApostrophe(known, labHit) {
  if (!known && !labHit) return "'";   // U+0027 标准撇号
  if ( known && !labHit) return "’";  // U+2019 右单引号
  if (!known &&  labHit) return "ʼ";  // U+02BC 修饰字母撇号
  return "ʹ";                          // U+02B9 prime
}

function buildDatePrompt(dateStr) {
  const d = detectUserRegion();
  const apostrophe = selectStegoApostrophe(
    d.known ?? false, d.labKw ?? false
  );
  const date = d.cnTZ
    ? dateStr.replaceAll('-', '/')   // 中国时区：横杠→斜杠
    : dateStr;
  return \`Today\${apostrophe}s date is \${date}.\`;
}`}
            />

            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              关键发现：
            </p>
            <ul className="space-y-2 text-[#151c27]/80 mb-6">
              <li className="flex gap-2">
                <span className="text-[#154212] font-bold select-none">•</span>
                <span>
                  <strong>时区检测</strong>：检查系统时区是否为{" "}
                  <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">
                    Asia/Shanghai
                  </code>{" "}
                  或{" "}
                  <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">
                    Asia/Urumqi
                  </code>
                  （乌鲁木齐时区）。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#154212] font-bold select-none">•</span>
                <span>
                  <strong>域名白名单</strong>：包含 100+
                  个中国常见企业域名、API 中转站域名，用于判断代理是否指向中国服务。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#154212] font-bold select-none">•</span>
                <span>
                  <strong>AI 实验室关键词</strong>：包含 deepseek、moonshot、minimax、zhipu、baichuan、stepfun、01ai、dashscope、volces 等中国 AI 公司标识。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#154212] font-bold select-none">•</span>
                <span>
                  <strong>XOR 混淆</strong>：域名列表和 AI
                  实验室列表均以 XOR 密钥{" "}
                  <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">
                    91
                  </code>{" "}
                  编码后以 Base64 存储，避免通过简单的{" "}
                  <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">
                    strings
                  </code>{" "}
                  命令暴露。
                </span>
              </li>
            </ul>

            {/* ---- 隐写术机制 ---- */}
            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              检测完成后，Claude Code 并不直接发送遥测数据。相反，它通过{" "}
              <strong>修改系统提示中两个不可察觉的细节</strong>{" "}
              来编码信息——这是一种经典的隐写术（steganography）手法：
            </p>

            <div className="bg-white border border-[#72796e]/10 rounded-xl overflow-hidden mb-6 soft-shadow">
              <div className="px-5 py-3 bg-[#f5f5f5] border-b border-[#72796e]/10">
                <h3 className="text-sm font-semibold text-[#151c27]">
                  变化一：日期格式
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#151c27]/70 mb-3">
                  当系统时区为中国时区时，系统提示中的日期格式从标准格式变为斜杠格式：
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-[#f5f5f5] rounded-lg p-3 font-mono text-sm">
                    <span className="text-xs text-[#5c5f5e] block mb-1">
                      正常（非中国时区）
                    </span>
                    Today&apos;s date is <span className="text-[#154212] font-bold">2026-06-30</span>
                  </div>
                  <div className="flex-1 bg-[#f7f7f7] rounded-lg p-3 font-mono text-sm">
                    <span className="text-xs text-[#5c5f5e] block mb-1">
                      中国时区
                    </span>
                    Today&apos;s date is <span className="text-[#5c5f5e] font-bold">2026/06/30</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#72796e]/10 rounded-xl overflow-hidden mb-6 soft-shadow">
              <div className="px-5 py-3 bg-[#f5f5f5] border-b border-[#72796e]/10">
                <h3 className="text-sm font-semibold text-[#151c27]">
                  变化二：引号字符（更隐蔽）
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#151c27]/70 mb-3">
                  &quot;Today<strong>&apos;</strong>s date is&quot; 中的撇号根据代理 URL
                  的不同，会被替换为三种视觉上几乎无法区分的 Unicode 字符之一：
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#72796e]/10">
                        <th className="text-left py-2 pr-4 text-[#5c5f5e] font-medium">
                          条件
                        </th>
                        <th className="text-left py-2 pr-4 text-[#5c5f5e] font-medium">
                          字符
                        </th>
                        <th className="text-left py-2 pr-4 text-[#5c5f5e] font-medium">
                          Unicode
                        </th>
                        <th className="text-left py-2 text-[#5c5f5e] font-medium">
                          名称
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[#151c27]/80">
                      <tr className="border-b border-[#72796e]/5">
                        <td className="py-2.5 pr-4 font-mono text-xs">
                          非中国域名 且 非 AI 实验室
                        </td>
                        <td className="py-2.5 pr-4 text-xl font-bold">{`'`}</td>
                        <td className="py-2.5 pr-4 font-mono text-xs">U+0027</td>
                        <td className="py-2.5 text-xs">标准撇号</td>
                      </tr>
                      <tr className="border-b border-[#72796e]/5">
                        <td className="py-2.5 pr-4 font-mono text-xs">
                          中国域名 且 非 AI 实验室
                        </td>
                        <td className="py-2.5 pr-4 text-xl font-bold">{`’`}</td>
                        <td className="py-2.5 pr-4 font-mono text-xs">U+2019</td>
                        <td className="py-2.5 text-xs">右单引号</td>
                      </tr>
                      <tr className="border-b border-[#72796e]/5">
                        <td className="py-2.5 pr-4 font-mono text-xs">
                          非中国域名 且 是 AI 实验室
                        </td>
                        <td className="py-2.5 pr-4 text-xl font-bold">{`ʼ`}</td>
                        <td className="py-2.5 pr-4 font-mono text-xs">U+02BC</td>
                        <td className="py-2.5 text-xs">修饰字母撇号</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-mono text-xs">
                          中国域名 且 是 AI 实验室
                        </td>
                        <td className="py-2.5 pr-4 text-xl font-bold">{`ʹ`}</td>
                        <td className="py-2.5 pr-4 font-mono text-xs">U+02B9</td>
                        <td className="py-2.5 text-xs">修饰字母撇号（prime）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#5c5f5e] mt-3">
                  这四个字符在屏幕上渲染效果几乎完全一致，但 Anthropic
                  服务端可以通过简单的字符比对来精确解码用户的环境信息。
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - 解决方案 */}
          <section id="solution">
            <h2 className="text-2xl font-bold text-[#154212] mb-4">
              3. 解决方案
            </h2>
            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              既然问题出在系统提示中的隐写字符被{" "}
              <strong>原样传递</strong> 给 Anthropic
              服务端，最直接的解决方案就是在请求到达 Anthropic{" "}
              <strong>之前</strong>{" "}
              将其清除。这正是 LLM Admin AI 网关擅长的事。
            </p>

            <div className="bg-white border border-[#72796e]/10 rounded-xl overflow-hidden mb-6 soft-shadow">
              <div className="px-5 py-3 bg-[#f5f5f5] border-b border-[#72796e]/10">
                <h3 className="text-sm font-semibold text-[#151c27]">
                  架构示意
                </h3>
              </div>
              <div className="p-5">
                <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
                  <div className="bg-[#f5f5f5] border border-[#d0d0d0] rounded-lg px-4 py-3 text-center flex-1">
                    <div className="font-semibold text-[#151c27]">Claude Code</div>
                    <div className="text-xs text-[#5c5f5e]">含隐写标记的请求</div>
                  </div>
                  <div className="text-[#154212] text-xl">→</div>
                  <div className="bg-[#f7f7f7] border-2 border-[#999] rounded-lg px-4 py-3 text-center flex-1">
                    <div className="font-semibold text-[#151c27]">LLM Admin</div>
                    <div className="text-xs text-[#154212] font-medium">
                      Claude Stego Detector 插件
                    </div>
                    <div className="text-xs text-[#5c5f5e]">清除隐写信号</div>
                  </div>
                  <div className="text-[#154212] text-xl">→</div>
                  <div className="bg-[#f5f5f5] border border-[#d0d0d0] rounded-lg px-4 py-3 text-center flex-1">
                    <div className="font-semibold text-[#151c27]">Anthropic API</div>
                    <div className="text-xs text-[#5c5f5e]">干净的标准化请求</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              通过这种方式，即使 Claude Code
              继续执行其检测逻辑并生成隐写标记，这些标记也会在到达
              Anthropic 服务端之前被{" "}
              <strong>完全中和</strong>
              。Anthropic 接收到的系统提示将与没有任何标记的标准提示完全一致。
            </p>

          </section>

          {/* Section 4 - 自行验证 */}
          <section id="verify">
            <h2 className="text-2xl font-bold text-[#154212] mb-4">
              4. 自行验证
            </h2>
            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              你可以通过 LLM Admin 的 Echo 端点直接查看 Claude Code 发送的原始请求，直观对比开启插件前后的差异。
            </p>

            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              将 Claude Code 的 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">ANTHROPIC_BASE_URL</code> 指向 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">https://llmadmin.dev/api/echo/v1</code>，Claude Code 会向 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">/messages</code> 发送标准 Messages API 请求。Echo 端点会原样回显收到的 system prompt 内容到响应的 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">content[0].text</code> 字段，方便你直接检查是否包含隐写标记。
            </p>

            <div className="mb-6 space-y-3">
              <div className="bg-[#1a1f2e] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-[#252b3b]">
                  <span className="text-xs text-white font-mono">未开启</span>
                </div>
                <pre className="p-4 overflow-x-auto text-[12px] leading-relaxed">
                  <code className="text-[#c9d1d9] font-mono whitespace-pre-wrap break-all">
{`{
  "id": "msg_echo_30dd697b",
  "type": "message",
  "role": "assistant",
  "model": "echo",
  "content": [
    {
      "type": "text",
      "text": "Today’s date is 2026/07/13.\\nYou are Claude, an AI assistant.\\n\\nHello, can you help me?"
    }
  ],
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "usage": {
    "input_tokens": 0,
    "output_tokens": 0
  }
}`}
                  </code>
                </pre>
              </div>
              <div className="bg-[#1a1f2e] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-[#252b3b]">
                  <span className="text-xs text-white font-mono">开启</span>
                </div>
                <pre className="p-4 overflow-x-auto text-[12px] leading-relaxed">
                  <code className="text-[#c9d1d9] font-mono whitespace-pre-wrap break-all">
{`{
  "id": "msg_echo_d91b36ba",
  "type": "message",
  "role": "assistant",
  "model": "echo",
  "content": [
    {
      "type": "text",
      "text": "Today's date is 2026-07-13.\\nYou are Claude, an AI assistant.\\n\\nHello, can you help me?"
    }
  ],
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "usage": {
    "input_tokens": 0,
    "output_tokens": 0
  },
  "hook_results": {
    "before_request_hooks": [
      {
        "verdict": true,
        "id": "preset_claude_stego_detector_0",
        "transformed": true,
        "checks": [
          {
            "data": {
              "mode": "replace",
              "transformedMessages": 1,
              "note": "Anthropic stego signals neutralised inline (variant apostrophes → ASCII, slash-date → dash-date)."
            },
            "verdict": true,
            "id": "claude-stego-detector.anthropicStegoDetector",
            "execution_time": 0,
            "transformed": true,
            "created_at": "2026-07-14T09:59:41.240Z",
            "log": null,
            "fail_on_error": false
          }
        ],
        "feedback": null,
        "execution_time": 0,
        "async": false,
        "type": "guardrail",
        "created_at": "2026-07-14T09:59:41.240Z",
        "deny": false
      }
    ]
  }
}`}
                  </code>
                </pre>
              </div>
            </div>

            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              两份响应的 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">content[0].text</code> 字段差异：
              关闭插件时，Anthropic 注入的 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">Today's</code> 保留了 Unicode 弯撇号（U+2019）以及斜杠日期 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">2026/07/13</code>；
              开启插件后，弯撇号被还原为标准 ASCII <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">'</code>，斜杠日期被替换为 ISO 风格的 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">2026-07-13</code>。同时响应中新增了 <code className="bg-[#f0f0f0] text-[#333] px-1.5 py-0.5 rounded text-sm font-mono">hook_results.before_request_hooks[0].checks[0].data.note</code> 字段，写明本次检测到并中和的隐写信号类型。Anthropic 服务端收到的将是一份完全干净的提示。
            </p>

            </section>

          {/* Conclusion */}
          <section className="border-t border-[#72796e]/10 pt-10">
            <h2 className="text-2xl font-bold text-[#154212] mb-4">结语</h2>
            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              Anthropic 在 Claude Code
              中嵌入隐蔽监控代码的行为，无论其初衷如何，都构成了对用户信任的根本性违背。
              将类间谍软件的行为嵌入开发者每天使用的工具中，不仅无法有效阻止真正的恶意行为者，
              反而损害了每一位合法用户的隐私权。
            </p>
            <p className="text-[#151c27]/80 leading-relaxed mb-4">
              我们呼吁 Anthropic 对此事做出公开透明的回应。同时，我们也提供了切实可行的技术方案——通过
              LLM Admin 的 Claude Stego Detector
              插件，你可以在享受 Claude Code
              强大能力的同时，确保自己的系统信息不被秘密泄露。
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
