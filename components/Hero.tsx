"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          LLM Admin
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-4">
          一个软件，两种协议，所有模型
        </p>
        <p className="text-lg text-gray-400">
          本地 AI 网关，连接所有主流模型供应商
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16"
      >
        <div className="flex gap-4">
          <a
            href="https://github.com/llmadmin/llmadmin/releases/latest/download/llmadmin-windows-amd64.deb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-white/80"
          >
            Windows
          </a>
          <a
            href="https://github.com/llmadmin/llmadmin/releases/latest/download/llmadmin-darwin-arm64.deb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-white/80"
          >
            macOS
          </a>
          <a
            href="https://github.com/llmadmin/llmadmin/releases/latest/download/llmadmin-linux-amd64.deb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-white/80"
          >
            Linux
          </a>
        </div>
      </motion.div>
    </section>
  );
}