import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <Navigation />
      <div className="max-w-[800px] mx-auto px-4 md:px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-[#154212] mb-8">
          隐私政策
        </h1>
        <p className="text-sm text-[#5c5f5e] mb-8">
          最后更新日期：2024 年 1 月 1 日
        </p>

        <section className="space-y-8 text-[#151c27]/80 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              1. 信息收集
            </h2>
            <p className="mb-3">
              我们可能收集以下类型的信息，以提供和改进我们的服务：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>账户信息：用户名、电子邮箱地址等注册信息。</li>
              <li>使用数据：访问日志、操作记录、设备信息等。</li>
              <li>技术数据：IP 地址、浏览器类型、操作系统等。</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              2. 信息使用
            </h2>
            <p className="mb-3">我们收集的信息将用于：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>提供、维护和改进我们的服务。</li>
              <li>处理您的请求并与您沟通。</li>
              <li>监控使用情况并检测潜在问题。</li>
              <li>提供技术支持和服务更新通知。</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              3. 信息保护
            </h2>
            <p>
              我们采取合理的技术和管理措施来保护您的个人信息，防止未经授权的访问、披露、更改或破坏。这些措施包括数据加密、访问控制和安全审计等。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              4. 信息共享
            </h2>
            <p>
              我们不会将您的个人信息出售给第三方。在以下情况下，我们可能会共享您的信息：获得您的明确同意；法律法规要求；保护我们的合法权益；与受保密协议约束的服务提供商合作。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              5. Cookie 政策
            </h2>
            <p>
              我们使用 Cookie 和类似技术来提升用户体验、分析使用趋势并个性化内容。您可以通过浏览器设置管理 Cookie 偏好。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              6. 您的权利
            </h2>
            <p className="mb-3">您有权：</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>访问我们持有的您的个人信息。</li>
              <li>要求更正不准确的信息。</li>
              <li>要求删除您的个人信息。</li>
              <li>撤回对数据处理的同意。</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              7. 政策更新
            </h2>
            <p>
              我们可能会不时更新本隐私政策。更新后的政策将在本页面上发布，并修改"最后更新日期"。继续使用我们的服务即表示您同意更新后的政策。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#154212] mb-3">
              8. 联系我们
            </h2>
            <p>
              如您对本隐私政策有任何疑问，请通过我们的官方渠道与我们联系。
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
