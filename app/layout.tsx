import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLM Admin - 一个软件，两种协议，无限模型",
  description:
    "LLM Admin 是为您量身定制的强大且灵活的软件分发解决方案。无论是在复杂的企业环境还是个人开发工作流中，都能提供卓越的稳定性与性能表现。",
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