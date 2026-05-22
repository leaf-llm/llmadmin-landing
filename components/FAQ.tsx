"use client";

import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const faqs = [
  {
    question: "什么是 LLM Admin？",
    answer:
      "LLM Admin 是一款大模型管理与路由转发平台，统一接口全面兼容 OpenAI 与 Anthropic 协议，支持自定义模型请求路径，让每一次请求都能稳定成功。",
  },
  {
    question: "怎么自定义路由？",
    answer:
      "填入 API Key 添加供应商后，可选择具体模型添加到模型路由中，然后按照路由规则进行请求，轻松实现多模型管理与智能调度。",
  },
  {
    question: "统一接口是什么？",
    answer:
      "统一接口将不同供应商（如 OpenAI、Anthropic、国产模型等）的 API 标准化，不管 Endpoint 是什么协议，都能无缝连接，一次接入即可调用所有模型，告别多套 API 的维护成本。",
  },
  {
    question: "具体路由的规则是怎样的？",
    answer:
      "将模型添加到路由中，可设置主模型与次模型。主模型成功则立即返回，否则按顺序依次请求下一个；次模型随机请求，失败无重试，确保高可用与负载均衡。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 md:px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#151c27] mb-4">常见问题</h2>
        <div className="w-16 h-1 bg-[#2d5a27] mx-auto rounded-full" />
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-white border border-[#72796e]/5 rounded-2xl soft-shadow transition-all duration-300"
            open={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-semibold text-[#151c27]">{faq.question}</span>
              <MdExpandMore size={24} className="text-[#2d5a27] transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-[#5c5f5e]">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}