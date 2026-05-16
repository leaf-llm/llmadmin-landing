"use client";

import { Apple } from '@lobehub/icons';
import { FaWindows, FaUbuntu } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="pt-[160px] pb-20 px-4 md:px-6 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-[64px] leading-tight font-bold text-[#151c27] tracking-tight">
            一个接口
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;两种
              <span className="inline-flex flex-col h-[1em] overflow-hidden align-top">
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
            <div>
              <span className="text-[#2d5a27]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任意模型
              </span>
            </div>
          </h1>
          <p className="text-lg text-[#5c5f5e] leading-relaxed max-w-xl">
            LLM Admin 是为您量身定制的强大且灵活的软件分发解决方案。无论是在复杂的企业环境还是个人开发工作流中，都能提供卓越的稳定性与性能表现。
          </p>
          <div className="flex flex-row flex-nowrap gap-4 pt-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-4 py-3 rounded-xl hover:bg-[#154212] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg text-sm font-medium">
              <FaWindows size={20} />
              Windows (.exe)
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-4 py-3 rounded-xl hover:bg-[#154212] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg text-sm font-medium">
              <Apple size={20} />
              macOS (.dmg)
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-4 py-3 rounded-xl hover:bg-[#154212] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg text-sm font-medium">
              <FaUbuntu size={20} />
              Linux (.deb)
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#2d5a27]/5 blur-[120px] rounded-full -z-10 transform scale-75" />
          <div className="rounded-2xl overflow-hidden border border-[#72796e]/10 soft-shadow bg-white p-2 md:p-3">
            <img
              alt="LLM Admin Dashboard Preview"
              className="w-full h-auto rounded-lg shadow-sm"
              src="/logo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}