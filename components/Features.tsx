"use client";

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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#151c27] mb-3">自定义路由</h3>
            <p className="text-[#5c5f5e]">灵活配置您的流量路径，确保数据传输的高效与安全。</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 hover:border-[#2d5a27]/20 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#2d5a27]/5 text-[#2d5a27] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#151c27] mb-3">多种供应商</h3>
            <p className="text-[#5c5f5e]">原生支持广泛的全球服务提供商集成，满足多样化业务需求。</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 hover:border-[#2d5a27]/20 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#2d5a27]/5 text-[#2d5a27] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#151c27] mb-3">协议兼容</h3>
            <p className="text-[#5c5f5e]">深度优化，完美适配多种标准传输协议，保障极速响应。</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#72796e]/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 hover:border-[#2d5a27]/20 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#2d5a27]/5 text-[#2d5a27] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
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
                <svg className="w-6 h-6 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
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
                <svg className="w-6 h-6 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
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
                <svg className="w-6 h-6 text-[#2d5a27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="font-semibold text-[#151c27]">指定路由</span>
              <span className="text-xs text-[#5c5f5e] mt-1">Assign Routes</span>
            </div>
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