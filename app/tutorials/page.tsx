import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Tutorials() {
  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <Navigation />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-[#154212] mb-12">
          Tutorials
        </h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-48 flex-shrink-0">
            <nav className="sticky top-32 space-y-2">
              <p className="text-xs font-semibold text-[#5c5f5e] uppercase tracking-wider mb-4">
                Platforms
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
              <h2 className="text-2xl font-bold text-[#154212] mb-8">QCLAW Integration</h2>

              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <p className="text-sm text-[#5c5f5e] mb-2">Step 1</p>
                    <h3 className="text-lg font-semibold text-[#151c27] mb-3">
                      Configure QCLAW Settings
                    </h3>
                    <p className="text-[#151c27]/80 leading-relaxed">
                      Navigate to your QCLAW dashboard and locate the integration settings panel.
                    </p>
                  </div>
                  <div className="flex-1 bg-gray-100 border-2 border-dashed rounded-xl aspect-video flex items-center justify-center text-[#5c5f5e]">
                    Screenshot placeholder
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <p className="text-sm text-[#5c5f5e] mb-2">Step 2</p>
                    <h3 className="text-lg font-semibold text-[#151c27] mb-3">
                      Connect to LLM Admin
                    </h3>
                    <p className="text-[#151c27]/80 leading-relaxed">
                      Enter your LLM Admin endpoint URL and API key in the configuration fields.
                    </p>
                  </div>
                  <div className="flex-1 bg-gray-100 border-2 border-dashed rounded-xl aspect-video flex items-center justify-center text-[#5c5f5e]">
                    Screenshot placeholder
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <p className="text-sm text-[#5c5f5e] mb-2">Step 3</p>
                    <h3 className="text-lg font-semibold text-[#151c27] mb-3">
                      Test Connection
                    </h3>
                    <p className="text-[#151c27]/80 leading-relaxed">
                      Click the test button to verify the connection is working properly.
                    </p>
                  </div>
                  <div className="flex-1 bg-gray-100 border-2 border-dashed rounded-xl aspect-video flex items-center justify-center text-[#5c5f5e]">
                    Screenshot placeholder
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