"use client";

import { MdApi, MdTableChart, MdAltRoute, MdRoute, MdHub, MdSecurity, MdDashboard } from "react-icons/md";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#f0f3ff]/30 px-4 md:px-6 border-t border-[#72796e]/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#151c27] mb-4">核心功能</h2>
          <div className="w-16 h-1 bg-[#2d5a27] mx-auto rounded-full" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 hover:border-[#2d5a27]/20 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#2d5a27]/5 text-[#2d5a27] rounded-xl flex items-center justify-center mb-6">
              <MdRoute className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#151c27] mb-3">自定义路由</h3>
            <p className="text-[#5c5f5e]">灵活配置您的流量路径，确保数据传输的高效与安全。</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 hover:border-[#2d5a27]/20 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#2d5a27]/5 text-[#2d5a27] rounded-xl flex items-center justify-center mb-6">
              <MdHub className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#151c27] mb-3">多种供应商</h3>
            <p className="text-[#5c5f5e]">原生支持广泛的全球服务提供商集成，满足多样化业务需求。</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 hover:border-[#2d5a27]/20 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#2d5a27]/5 text-[#2d5a27] rounded-xl flex items-center justify-center mb-6">
              <MdSecurity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#151c27] mb-3">协议兼容</h3>
            <p className="text-[#5c5f5e]">深度优化，完美适配多种标准传输协议，保障极速响应。</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 hover:border-[#2d5a27]/20 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#2d5a27]/5 text-[#2d5a27] rounded-xl flex items-center justify-center mb-6">
              <MdDashboard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#151c27] mb-3">界面友好</h3>
            <p className="text-[#5c5f5e]">直观且现代的用户交互界面，让复杂的操作变得简单自然。</p>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mt-16 pt-16 border-t border-[#72796e]/5">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-semibold text-[#151c27] mb-4">工作流程</h4>
            <div className="w-16 h-1 bg-[#2d5a27] mx-auto rounded-full" />
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto gap-8 md:gap-4">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#2d5a27]/10 -translate-y-1/2 z-0" />

            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#2d5a27]/20 flex items-center justify-center mb-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)]">
                <MdApi className="w-7 h-7 text-[#2d5a27]" />
              </div>
              <span className="font-semibold text-[#151c27]">连接供应商</span>
              <span className="text-xs text-[#5c5f5e] mt-1">Connect Providers</span>
            </div>

            <div className="md:hidden">
              <svg className="w-6 h-6 text-[#2d5a27]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#2d5a27]/20 flex items-center justify-center mb-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)]">
                <MdTableChart className="w-7 h-7 text-[#2d5a27]" />
              </div>
              <span className="font-semibold text-[#151c27]">添加模型</span>
              <span className="text-xs text-[#5c5f5e] mt-1">Add Models</span>
            </div>

            <div className="md:hidden">
              <svg className="w-6 h-6 text-[#2d5a27]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center flex-1">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#2d5a27]/20 flex items-center justify-center mb-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)]">
                <MdAltRoute className="w-7 h-7 text-[#2d5a27]" />
              </div>
              <span className="font-semibold text-[#151c27]">指定路由</span>
              <span className="text-xs text-[#5c5f5e] mt-1">Assign Routes</span>
            </div>
          </div>

          {/* Routing Convergence Animation */}
          <div className="w-full max-w-4xl mx-auto h-32 md:h-40 overflow-hidden relative mb-8">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 160">
              {/* Static Paths */}
              <path d="M 133 0 Q 133 80 400 120" fill="none" opacity="0.4" stroke="#e1e3e2" strokeWidth="1.5"></path>
              <path d="M 400 0 Q 400 80 400 120" fill="none" opacity="0.4" stroke="#e1e3e2" strokeWidth="1.5"></path>
              <path d="M 666 0 Q 666 80 400 120" fill="none" opacity="0.4" stroke="#e1e3e2" strokeWidth="1.5"></path>
              {/* Animated Flows */}
              <path className="animate-flow" data-delay="0s" d="M 133 0 Q 133 80 400 120" fill="none" stroke="#2d5a27" strokeWidth="2"></path>
              <path className="animate-flow" data-delay="1.5s" d="M 400 0 Q 400 80 400 120" fill="none" stroke="#2d5a27" strokeWidth="2"></path>
              <path className="animate-flow" data-delay="0.8s" d="M 666 0 Q 666 80 400 120" fill="none" stroke="#2d5a27" strokeWidth="2"></path>
              {/* Focal Point */}
              <circle cx="400" cy="120" fill="#2d5a27" r="3">
                <animate attributeName="r" dur="2s" repeatCount="indefinite" values="2;4;2"></animate>
                <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;0.4;1"></animate>
              </circle>
            </svg>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#154212] mb-2">20%</div>
              <div className="font-semibold text-[#151c27]">节省 Token</div>
              <p className="text-sm text-[#5c5f5e] mt-1">通过智能优化显著降低成本</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#154212] mb-2">&lt;5s</div>
              <div className="font-semibold text-[#151c27]">平均响应时间</div>
              <p className="text-sm text-[#5c5f5e] mt-1">极速流式传输，拒绝等待</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#154212] mb-2">100+</div>
              <div className="font-semibold text-[#151c27]">主流模型</div>
              <p className="text-sm text-[#5c5f5e] mt-1">一键集成全球顶尖 AI 能力</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}