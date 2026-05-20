"use client";

import { MdCheck } from "react-icons/md";

const items = [
  { title: "数据完全本地处理", desc: "无第三方泄露风险，保障您的隐私与合规性" },
  { title: "全球广泛的供应商集成", desc: "原生接入主流 AI 服务商，无需繁琐适配" },
  { title: "强大的技术基座", desc: "高性能架构，支持高并发，稳定支撑关键业务" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#151c27] mb-4">为什么选择我们</h2>
          <div className="w-16 h-1 bg-[#2d5a27] mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)]">
          <div className="space-y-6">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#2d5a27] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <MdCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-[#151c27]">{item.title}</span>
                  <span className="text-[#5c5f5e]"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
