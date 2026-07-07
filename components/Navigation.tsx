"use client";

import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-3 bg-[#f9f9ff]/80 dark:bg-[#d3daea]/80 backdrop-blur-md rounded-full mt-4 mx-auto max-w-[1200px] border border-[#72796e]/10 shadow-sm">
      <a href="/" className="flex items-center gap-2">
        <img
          alt="LLM Admin Logo"
          className="w-8 h-8 object-contain"
          src="/logo.png"
        />
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#154212] dark:text-[#a1d494]">
            LLM Admin
          </span>
          <span className="hidden sm:block text-xs text-[#5c5f5e] font-medium tracking-wide">
            Your Chief LLM Partner
          </span>
        </div>
      </a>
      <div className="hidden md:flex gap-8">
        <a
          className={isActive("/") ? "text-[#154212] dark:text-[#a1d494] font-semibold border-b-2 border-[#154212] transition-all text-sm" : "text-[#5c5f5e] dark:text-[#c5c7c6] hover:text-[#154212] dark:hover:text-[#a1d494] transition-colors text-sm"}
          href="/#download"
        >
          概览
        </a>
        <a
          className={isActive("/plugins") ? "text-[#154212] dark:text-[#a1d494] font-semibold border-b-2 border-[#154212] transition-all text-sm" : "text-[#5c5f5e] dark:text-[#c5c7c6] hover:text-[#154212] dark:hover:text-[#a1d494] transition-colors text-sm"}
          href="/plugins"
        >
          插件
        </a>
        <a
          className={isActive("/tutorials") ? "text-[#154212] dark:text-[#a1d494] font-semibold border-b-2 border-[#154212] transition-all text-sm" : "text-[#5c5f5e] dark:text-[#c5c7c6] hover:text-[#154212] dark:hover:text-[#a1d494] transition-colors text-sm"}
          href="/tutorials"
        >
          教程
        </a>
        <a
          className={isActive("/release-log") ? "text-[#154212] dark:text-[#a1d494] font-semibold border-b-2 border-[#154212] transition-all text-sm" : "text-[#5c5f5e] dark:text-[#c5c7c6] hover:text-[#154212] dark:hover:text-[#a1d494] transition-colors text-sm"}
          href="/release-log"
        >
          更新日志
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/leaf-llm/llmadmin-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#2d5a27] dark:text-[#a1d494] text-sm px-4 py-2 rounded-full hover:underline underline-offset-4 transition-colors"
        >
          <FaGithub size={16} />
          GitHub
        </a>
        <a href="/#download" className="bg-[#2d5a27] text-white text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-all scale-95 active:scale-90 hover:shadow-lg">
          立即开始
        </a>
      </div>
    </nav>
  );
}