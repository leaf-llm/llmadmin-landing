"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "自定义路由",
    description: "灵活配置请求路由，精准控制流量走向",
    icon: "🔀",
  },
  {
    title: "多种供应商",
    description: "支持 OpenAI、Anthropic、Ollama 等多种 API",
    icon: "🔗",
  },
  {
    title: "协议友好",
    description: "兼容 OpenAI 和 Anthropic 双重协议",
    icon: "📡",
  },
  {
    title: "界面友好",
    description: "简洁直观的配置界面，快速上手",
    icon: "✨",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}