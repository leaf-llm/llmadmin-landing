import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Tutorials() {
  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <Navigation />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-[#154212] mb-12">
          教程
        </h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-48 flex-shrink-0">
            <nav className="sticky top-32 space-y-2">
              <p className="text-xs font-semibold text-[#5c5f5e] uppercase tracking-wider mb-4">
                平台
              </p>
              <a
                href="#qclaw"
                className="block text-sm text-[#154212] font-medium py-2 border-l-2 border-[#154212] bg-[#f0f7ee] px-3"
              >
                QCLAW
              </a>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-16">
            {/* QCLAW Section */}
            <section id="qclaw">
              <h2 className="text-2xl font-bold text-[#154212] mb-8">QCLAW 集成</h2>

              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <p className="text-sm text-[#5c5f5e] mb-2">步骤 1</p>
                    <h3 className="text-lg font-semibold text-[#151c27] mb-3">
                      配置 QCLAW 设置
                    </h3>
                    <p className="text-[#151c27]/80 leading-relaxed">
                      进入 QCLAW 仪表板，找到集成设置面板。
                    </p>
                  </div>
                  <div className="flex-1">
                    <img
                      src="/qclaw-1.png"
                      alt="QCLAW 设置截图"
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <p className="text-sm text-[#5c5f5e] mb-2">步骤 2</p>
                    <h3 className="text-lg font-semibold text-[#151c27] mb-3">
                      连接到 LLM Admin
                    </h3>
                    <p className="text-[#151c27]/80 leading-relaxed">
                      在配置字段中输入您的 LLM Admin 端点 URL 和 API 密钥。
                    </p>
                    <div className="mt-4 p-3 bg-[#f0f7ee] border border-[#2d5a27]/20 rounded-lg">
                      <p className="text-sm text-[#5c5f5e]">
                        提示：协议可选择 OpenAI 兼容或 Anthropic 兼容，Key 可随意填写，建议填 0000。
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <img
                      src="/qclaw-2.png"
                      alt="连接配置截图 1"
                      className="w-full rounded-xl"
                    />
                    <img
                      src="/qclaw-3.png"
                      alt="连接配置截图 2"
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <p className="text-sm text-[#5c5f5e] mb-2">步骤 3</p>
                    <h3 className="text-lg font-semibold text-[#151c27] mb-3">
                      提问测试
                    </h3>
                    <p className="text-[#151c27]/80 leading-relaxed">
                      通过提问测试连接是否正常工作。
                    </p>
                  </div>
                  <div className="flex-1">
                    <img
                      src="/qclaw-4.png"
                      alt="测试连接截图"
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}