"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "Windows",
    icon: "🪟",
    url: "https://github.com/llmadmin/llmadmin/releases/latest/download/llmadmin-windows-amd64.deb",
  },
  {
    name: "macOS",
    icon: "🍎",
    url: "https://github.com/llmadmin/llmadmin/releases/latest/download/llmadmin-darwin-arm64.deb",
  },
  {
    name: "Linux",
    icon: "🐧",
    url: "https://github.com/llmadmin/llmadmin/releases/latest/download/llmadmin-linux-amd64.deb",
  },
];

export default function DownloadSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">立即下载</h2>
        <p className="text-gray-400 mb-12">选择你的平台开始使用</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 hover:border-blue-500/50 transition-all"
            >
              <span className="text-2xl">{platform.icon}</span>
              <span className="text-lg font-medium text-white">
                {platform.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}