export default function MarqueeSection() {
  return (
    <section className="py-12 bg-[#f0f3ff]/30 px-4 md:px-6 border-t border-[#72796e]/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full overflow-hidden py-4 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex whitespace-nowrap gap-12 items-center animate-marquee hover:[animation-play-state:paused]">
            <div className="flex shrink-0 items-center gap-12 text-[#154212] font-semibold tracking-widest">
              <span>OpenAI</span>
              <span>Anthropic</span>
              <span>Google</span>
              <span>GLM</span>
              <span>DeepSeek</span>
              <span>MiniMax</span>
            </div>
            <div className="flex shrink-0 items-center gap-12 text-[#154212] font-semibold tracking-widest">
              <span>OpenAI</span>
              <span>Anthropic</span>
              <span>Google</span>
              <span>GLM</span>
              <span>DeepSeek</span>
              <span>MiniMax</span>
            </div>
            <div className="flex shrink-0 items-center gap-12 text-[#154212] font-semibold tracking-widest">
              <span>OpenAI</span>
              <span>Anthropic</span>
              <span>Google</span>
              <span>GLM</span>
              <span>DeepSeek</span>
              <span>MiniMax</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}