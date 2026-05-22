"use client";

import { Apple } from '@lobehub/icons';
import { FaWindows, FaUbuntu } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="download" className="pt-[160px] pb-20 px-4 md:px-6 max-w-[1200px] mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-[64px] leading-tight font-bold text-[#151c27] tracking-tight">
            一个接口
            <div className="pl-[1.5em]">
              两种
              <span className="inline-flex flex-col h-[1.2em] overflow-hidden">
                <span className="animate-text-slide text-left">
                  <span className="text-[#2d5a27]">协议</span>
                  <br />
                  <span className="text-[#2d5a27]">OpenAI</span>
                  <br />
                  <span className="text-[#2d5a27]">Anthropic</span>
                  <br />
                  <span className="text-[#2d5a27]">协议</span>
                </span>
              </span>
            </div>
            <div className="pl-[3em]">
              <span className="text-[#2d5a27]">任意模型</span>
            </div>
          </h1>
          <p className="text-xl text-[#5c5f5e] leading-relaxed max-w-xl">
LLM Admin 将您的模型编排为一支全天候待命的 AI 团队。它调度、切换、守护每一次请求。您只管使用 —— 无惧网络波动。
          </p>
          <div className="flex flex-row flex-nowrap gap-4 pt-4">
            <div className="flex-1 flex flex-col items-center">
              <button className="w-full flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-4 py-3 rounded-xl hover:bg-[#154212] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg text-sm font-medium cursor-pointer">
                <FaWindows size={20} />
                Windows (.exe)
              </button>
              <span className="mt-2 text-xs text-[#5c5f5e]">* Windows 10/11</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <button className="w-full flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-4 py-3 rounded-xl hover:bg-[#154212] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg text-sm font-medium cursor-pointer">
                <Apple size={20} />
                macOS (.dmg)
              </button>
              <span className="mt-2 text-xs text-[#5c5f5e]">* Intel (macOS 12+)</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <button className="w-full flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-4 py-3 rounded-xl hover:bg-[#154212] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg text-sm font-medium cursor-pointer">
                <FaUbuntu size={20} />
                Linux (.deb)
              </button>
              <span className="mt-2 text-xs text-[#5c5f5e]">* Ubuntu 20.04+</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#2d5a27]/5 blur-[120px] rounded-full -z-10 transform scale-75" />
          <img
              alt="LLM Admin Dashboard Preview"
              className="w-full h-auto scale-110"
              src="/screen.png"
            />
        </div>
      </div>
    </section>
  );
}