import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <Navigation />
      <div className="max-w-[800px] mx-auto px-4 md:px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-[#154212] mb-8">
          服务条款
        </h1>
        <p className="text-sm text-[#5c5f5e] mb-8">
          最后更新日期：2024 年 1 月 1 日
        </p>

        <section className="space-y-8 text-[#151c27]/80 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              1. 服务说明
            </h2>
            <p>
              LLM Admin 是一款软件分发解决方案，为用户提供大语言模型的统一管理和分发服务。使用本服务即表示您同意遵守本服务条款。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              2. 使用许可
            </h2>
            <p className="mb-3">
              在遵守本条款的前提下，我们授予您非独占、不可转让的有限许可，允许您：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>根据您购买的许可证类型使用本软件。</li>
              <li>在授权范围内进行合理的内部使用和部署。</li>
              <li>获得本软件的更新和技术支持服务。</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              3. 使用限制
            </h2>
            <p className="mb-3">您不得：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>对本软件进行反向工程、反编译或反汇编。</li>
              <li>将本软件转售、出租或以其他方式分发给第三方。</li>
              <li>使用本软件从事任何违法或侵权活动。</li>
              <li>试图绕过或破坏本软件的安全机制或许可验证。</li>
              <li>移除或修改本软件中的任何版权声明或标识。</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              4. 知识产权
            </h2>
            <p>
              本软件及其所有相关知识产权归 LLM Admin 所有。本条款不授予您对本软件的任何所有权或知识产权，仅授予上述有限使用许可。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              5. 免责声明
            </h2>
            <p>
              本软件按"现状"提供，不作任何明示或暗示的保证。我们不保证本软件将不间断、安全或无错误。在法律允许的最大范围内，我们对因使用或无法使用本软件而产生的任何直接、间接、附带或后果性损害不承担责任。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              6. 服务变更与终止
            </h2>
            <p>
              我们保留随时修改、暂停或终止服务（或其任何部分）的权利。如因严重违反本条款，我们可能会终止您的访问权限，且无需事先通知。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              7. 条款更新
            </h2>
            <p>
              我们可能会不时修订本服务条款。修订后的条款将在本页面上发布，并修改"最后更新日期"。继续使用本服务即表示您接受修订后的条款。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              8. 适用法律与争议解决
            </h2>
            <p>
              本条款受适用法律管辖。因本条款产生的任何争议，双方应首先通过友好协商解决；协商不成的，应提交有管辖权的法院裁决。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              9. 联系我们
            </h2>
            <p>
              如您对本服务条款有任何疑问，请通过我们的官方渠道与我们联系。
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
