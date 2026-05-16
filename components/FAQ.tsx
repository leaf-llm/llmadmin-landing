"use client";

import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const faqs = [
  {
    question: "什么是 LLM Admin？",
    answer:
      "LLM Admin 是一款专为开发者和企业设计的大模型管理与分发平台，聚合了多种协议与供应商，提供极致的性能和灵活性。",
  },
  {
    question: "怎么自定义路由？",
    answer:
      "您可以在控制台通过直观的界面或配置文件定义流量路径，支持基于模型类型、地理位置或优先级的智能调度。",
  },
  {
    question: "统一接口是什么？",
    answer:
      "统一接口指将不同供应商（如 OpenAI, Claude, 国产模型等）的 API 标准化，让开发者只需一套代码即可调用所有模型。",
  },
  {
    question: "具体路由的规则是怎样的？",
    answer:
      "路由规则采用多层级匹配机制，包括负载均衡、故障自动转移以及基于 Token 消耗的成本优化规则。",
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