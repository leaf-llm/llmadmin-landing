'use client';

import { useEffect, useRef, useState } from 'react';
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

const VendorLogoItem = ({ size = 32 }: { size?: number }) => (
  <div className="flex shrink-0 items-center gap-12 pr-16">
    {logos.map((logo, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <logo.Mono size={size} />
        <logo.Text size={Math.floor(size * 0.75)} />
      </div>
    ))}
  </div>
);

export default function MarqueeSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const vendorWidthRef = useRef(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calcVendorWidth = () => {
      const w = track.children[0].getBoundingClientRect().width;
      vendorWidthRef.current = w;
    };

    // wait for fonts to load
    document.fonts.ready.then(() => {
      calcVendorWidth();
      setReady(true);
    });

    const ro = new ResizeObserver(() => {
      calcVendorWidth();
    });
    ro.observe(track);

    const speed = 50; // px per second

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPausedRef.current && vendorWidthRef.current > 0) {
        offsetRef.current += speed * delta;
        if (offsetRef.current >= vendorWidthRef.current) {
          offsetRef.current -= vendorWidthRef.current;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    let lastTime = 0;
    rafRef.current = requestAnimationFrame(animate);

    const handleMouseEnter = () => { isPausedRef.current = true; };
    const handleMouseLeave = () => { isPausedRef.current = false; };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 bg-[#f0f3ff]/30 px-4 md:px-6 border-t border-[#72796e]/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full overflow-hidden py-4 opacity-60">
          <div
            ref={trackRef}
            className="flex whitespace-nowrap"
            style={{ willChange: 'transform', opacity: ready ? 1 : 0 }}
          >
            <VendorLogoItem />
            <VendorLogoItem />
          </div>
        </div>
      </div>
    </section>
  );
}
