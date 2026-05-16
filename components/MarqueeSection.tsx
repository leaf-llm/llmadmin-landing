'use client';

import OpenAIMono from '@lobehub/icons/es/OpenAI/components/Mono';
import OpenAIText from '@lobehub/icons/es/OpenAI/components/Text';
import AnthropicMono from '@lobehub/icons/es/Anthropic/components/Mono';
import AnthropicText from '@lobehub/icons/es/Anthropic/components/Text';
import GeminiMono from '@lobehub/icons/es/Gemini/components/Mono';
import GeminiText from '@lobehub/icons/es/Gemini/components/Text';
import ZhipuMono from '@lobehub/icons/es/Zhipu/components/Mono';
import ZhipuText from '@lobehub/icons/es/Zhipu/components/Text';
import DeepSeekMono from '@lobehub/icons/es/DeepSeek/components/Mono';
import DeepSeekText from '@lobehub/icons/es/DeepSeek/components/Text';
import MinimaxMono from '@lobehub/icons/es/Minimax/components/Mono';
import MinimaxText from '@lobehub/icons/es/Minimax/components/Text';
import DoubaoMono from '@lobehub/icons/es/Doubao/components/Mono';
import DoubaoText from '@lobehub/icons/es/Doubao/components/Text';
import MoonshotMono from '@lobehub/icons/es/Moonshot/components/Mono';
import MoonshotText from '@lobehub/icons/es/Moonshot/components/Text';
import BailianMono from '@lobehub/icons/es/Bailian/components/Mono';
import BailianText from '@lobehub/icons/es/Bailian/components/Text';

const VendorLogo = ({ size = 32 }: { size?: number }) => {
  const logos = [
    { Mono: OpenAIMono, Text: OpenAIText },
    { Mono: AnthropicMono, Text: AnthropicText },
    { Mono: GeminiMono, Text: GeminiText },
    { Mono: ZhipuMono, Text: ZhipuText },
    { Mono: DeepSeekMono, Text: DeepSeekText },
    { Mono: MinimaxMono, Text: MinimaxText },
    { Mono: DoubaoMono, Text: DoubaoText },
    { Mono: MoonshotMono, Text: MoonshotText },
    { Mono: BailianMono, Text: BailianText },
  ];

  return (
    <div className="flex shrink-0 items-center gap-12">
      {logos.map((logo, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <logo.Mono size={size} />
          <logo.Text size={Math.floor(size * 0.75)} />
        </div>
      ))}
    </div>
  );
};

export default function MarqueeSection() {
  return (
    <section className="py-12 bg-[#f0f3ff]/30 px-4 md:px-6 border-t border-[#72796e]/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full overflow-hidden py-4 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex whitespace-nowrap gap-16 items-center animate-marquee hover:[animation-play-state:paused]">
            <VendorLogo />
            <VendorLogo />
            <VendorLogo />
            <VendorLogo />
            <VendorLogo />
          </div>
        </div>
      </div>
    </section>
  );
}