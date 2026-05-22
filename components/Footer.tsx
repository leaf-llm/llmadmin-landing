export default function Footer() {
  return (
    <footer className="bg-[#f9f9ff] dark:bg-[#2a313d] border-t border-[#72796e]/5 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center md:items-start gap-3 mb-8 md:mb-0">
          <div className="flex items-center gap-2">
            <img
              alt="LLM Admin Logo"
              className="w-8 h-8 object-contain"
              src="/logo.png"
            />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#154212]">LLM Admin</span>
              <span className="text-xs text-[#5c5f5e] font-medium tracking-wide">
                Your Chief LLM Partner
              </span>
            </div>
          </div>
          <p className="text-sm text-[#5c5f5e] opacity-80 max-w-xs text-center md:text-left">
            © 2026 LLM Admin. 保留所有权利。精确构建。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          <a className="text-sm text-[#5c5f5e] hover:text-[#154212] transition-colors" href="/privacy">
            隐私政策
          </a>
          <a className="text-sm text-[#5c5f5e] hover:text-[#154212] transition-colors" href="/terms">
            服务条款
          </a>
          <a className="text-sm text-[#5c5f5e] hover:text-[#154212] transition-colors" href="/tutorials">
            文档
          </a>
          <a className="text-sm text-[#5c5f5e] hover:text-[#154212] transition-colors" href="mailto:support@llmadmin.dev">
            联系我们
          </a>
        </div>
      </div>
    </footer>
  );
}