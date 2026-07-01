import type { Metadata } from "next";
import "./globals.css";

const HERO_DESCRIPTION =
  "LLM Admin 是您省钱又省心的模型搭档：精确缓存降低用量，本地化调度无缝切换主流 AI 供应商，无惧网络波动。";

export const metadata: Metadata = {
  title: "LLM Admin - Your Chief LLM Partner",
  description: HERO_DESCRIPTION,
  keywords: ["LLM Admin", "AI", "模型编排", "LLM", "OpenAI", "Anthropic", "API"],
  metadataBase: new URL("https://llmadmin.dev"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LLM Admin - Your Chief LLM Partner",
    description: HERO_DESCRIPTION,
    url: "https://llmadmin.dev",
    siteName: "LLM Admin",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LLM Admin",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Admin - Your Chief LLM Partner",
    description: HERO_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}