"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-3 bg-[#f9f9ff]/80 dark:bg-[#d3daea]/80 backdrop-blur-md rounded-full mt-4 mx-auto max-w-[1200px] border border-[#72796e]/10 shadow-sm">
      <div className="flex items-center gap-2">
        <img
          alt="LLM Admin Logo"
          className="w-8 h-8 object-contain"
          src="/logo.png"
        />
        <span className="font-semibold text-[#154212] dark:text-[#a1d494]">
          LLM Admin
        </span>
      </div>
      <div className="hidden md:flex gap-8">
        <a
          className="text-[#154212] dark:text-[#a1d494] font-semibold border-b-2 border-[#154212] transition-all text-sm"
          href="#"
        >
          Overview
        </a>
        <a
          className="text-[#5c5f5e] dark:text-[#c5c7c6] hover:text-[#154212] dark:hover:text-[#a1d494] transition-colors text-sm"
          href="#features"
        >
          Features
        </a>
        <a
          className="text-[#5c5f5e] dark:text-[#c5c7c6] hover:text-[#154212] dark:hover:text-[#a1d494] transition-colors text-sm"
          href="#"
        >
          About
        </a>
      </div>
      <button className="bg-[#2d5a27] text-white text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-all scale-95 active:scale-90 hover:shadow-lg">
        Get Started
      </button>
    </nav>
  );
}