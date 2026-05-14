import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLM Admin - 一个软件，两种协议，所有模型",
  description: "本地 AI 网关，支持多种协议和供应商",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="antialiased">{children}</body>
    </html>
  );
}