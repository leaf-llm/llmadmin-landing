import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLM Admin - Your Chief LLM Partner",
  description:
    "LLM Admin 将您的模型编排为一支全天候待命的 AI 团队。它调度、切换、守护每一次请求。您只管使用 —— 无惧网络波动。",
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