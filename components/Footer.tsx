export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} LLM Admin. 开源项目，MIT 许可证。
        </p>
      </div>
    </footer>
  );
}
