"use client";

import { Apple } from '@lobehub/icons';
import { FaWindows, FaUbuntu } from 'react-icons/fa';
import { handleDownloadClick } from '@/utils/analytics';
import { useDownloadToken } from '@/hooks/useDownloadToken';

export default function Hero() {
  const token = useDownloadToken();

  return (
    <section id="download" className="pt-[200px] md:pt-[220px] lg:pt-[240px] pb-20 px-4 md:px-6 max-w-[1200px] mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#151c27] tracking-tight space-y-1 whitespace-nowrap">
            <div>守护每一次请求</div>
            <div className="text-[#2d5a27]">最省钱可靠的模型搭档</div>
          </h1>
          <p className="text-xl text-[#5c5f5e] leading-relaxed max-w-xl">
            专为主流 AI 供应商而生，完全本地化。通过精确缓存节省用量，调度、切换、守护每一次请求。
          </p>
          <div className="flex flex-row flex-nowrap gap-4 pt-4">
            <div className="flex-1 flex flex-col items-center">
              <a href={`/api/download?platform=windows&token=${token}`} onClick={(e) => handleDownloadClick(e, "windows", "hero")} className="w-full flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-4 py-3 rounded-xl hover:bg-[#154212] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg text-sm font-medium cursor-pointer">
                <FaWindows size={20} />
                Windows (.exe)
              </a>
              <span className="mt-2 text-xs text-[#5c5f5e]">* Windows 10/11</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <a href={`/api/download?platform=macos&token=${token}`} onClick={(e) => handleDownloadClick(e, "macos", "hero")} className="w-full flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-4 py-3 rounded-xl hover:bg-[#154212] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg text-sm font-medium cursor-pointer">
                <Apple size={20} />
                macOS (.dmg)
              </a>
              <span className="mt-2 text-xs text-[#5c5f5e]">* (Intel) macOS 12+</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <a href={`/api/download?platform=linux&token=${token}`} onClick={(e) => handleDownloadClick(e, "linux", "hero")} className="w-full flex items-center justify-center gap-2 bg-[#2d5a27] text-white px-4 py-3 rounded-xl hover:bg-[#154212] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg text-sm font-medium cursor-pointer">
                <FaUbuntu size={20} />
                Linux (.deb)
              </a>
              <span className="mt-2 text-xs text-[#5c5f5e]">* Ubuntu 20.04+</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#2d5a27]/5 blur-[120px] rounded-full -z-10 transform scale-50" />
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