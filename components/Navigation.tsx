"use client";

import { usePathname } from "next/navigation";
import { FaGithub, FaPlay } from "react-icons/fa";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-3 sm:px-8 py-3 bg-[#f9f9ff]/80 dark:bg-[#d3daea]/80 backdrop-blur-md rounded-full mt-4 mx-auto max-w-[1200px] border border-[#72796e]/10 shadow-sm">
      <a href="/" className="flex items-center gap-2 shrink-0">
        <img
          alt="LLM Admin Logo"
          className="w-8 h-8 object-contain"
          src="/logo.png"
        />
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#154212] dark:text-[#a1d494] whitespace-nowrap">
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
          className={isActive("/blog") ? "text-[#154212] dark:text-[#a1d494] font-semibold border-b-2 border-[#154212] transition-all text-sm" : "text-[#5c5f5e] dark:text-[#c5c7c6] hover:text-[#154212] dark:hover:text-[#a1d494] transition-colors text-sm"}
          href="/blog"
        >
          博客
        </a>
        <a
          className={isActive("/release-log") ? "text-[#154212] dark:text-[#a1d494] font-semibold border-b-2 border-[#154212] transition-all text-sm" : "text-[#5c5f5e] dark:text-[#c5c7c6] hover:text-[#154212] dark:hover:text-[#a1d494] transition-colors text-sm"}
          href="/release-log"
        >
          更新日志
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="https://llmadmin-ui.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="在线 Demo"
          className="group flex items-center gap-1.5 text-sm font-medium text-white dark:text-[#1d1403] bg-[#b45309] dark:bg-[#fbbf24] px-3 sm:px-4 py-2 rounded-full shadow-sm hover:bg-[#92400e] dark:hover:bg-[#fcd34d] hover:shadow-md transition-all scale-95 active:scale-90"
        >
          <FaPlay size={10} className="transition-transform group-hover:scale-110" />
          Demo
        </a>
        <a
          href="https://github.com/leaf-llm/llmadmin-ui"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-1.5 text-[#2d5a27] dark:text-[#a1d494] text-sm px-2 sm:px-4 py-2 rounded-full hover:underline underline-offset-4 transition-colors"
        >
          <FaGithub size={16} />
          GitHub
        </a>
      </div>
    </nav>
  );
}