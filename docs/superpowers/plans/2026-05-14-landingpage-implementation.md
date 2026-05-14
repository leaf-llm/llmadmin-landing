# Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 创建 Next.js 15 landing page，展示产品并提供 Windows/macOS/Linux deb 版本下载

**Architecture:** 单页应用，App Router，使用 Tailwind CSS v4 和 Framer Motion 实现现代极简深色主题

**Tech Stack:** Next.js 15, Tailwind CSS v4, Framer Motion, TypeScript

---

## File Structure

```
llmadmin-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Landing page
│   └── globals.css          # Global styles + CSS variables
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features cards
│   ├── DownloadSection.tsx  # Platform download buttons
│   └── Footer.tsx           # Footer
├── package.json
├── tailwind.config.ts      # Tailwind v4 config
├── next.config.ts
└── tsconfig.json
```

---

## Task 1: Initialize Next.js Project

- [ ] **Step 1: Create package.json**

```json
{
  "name": "llmadmin-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.1.0",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "framer-motion": "^11.15.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

- [ ] **Step 2: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create next.config.ts**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
```

- [ ] **Step 4: Create postcss.config.mjs**

```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 5: Create app/globals.css**

```css
@import "tailwindcss";

:root {
  --color-bg: #0a0a0f;
  --color-surface: rgba(255, 255, 255, 0.05);
  --color-border: rgba(255, 255, 255, 0.1);
  --color-text: #ffffff;
  --color-text-muted: #9ca3af;
  --color-accent: #3b82f6;
  --color-accent-end: #8b5cf6;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-geist-sans, system-ui, sans-serif);
}

@theme {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-border: var(--color-border);
  --color-text: var(--color-text);
  --color-text-muted: var(--color-text-muted);
  --color-accent: var(--color-accent);
  --color-accent-end: var(--color-accent-end);
}
```

- [ ] **Step 6: Install dependencies**

Run: `npm install`
Expected: Dependencies installed, node_modules created

---

## Task 2: Create Layout and Page

- [ ] **Step 1: Create app/layout.tsx**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLM Admin - 一个软件，两种协议，所有模型",
  description: "本地 AI 网关，支持多种协议和供应商",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Create app/page.tsx**

```tsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 pointer-events-none" />
      <Hero />
      <Features />
      <DownloadSection />
      <Footer />
    </main>
  );
}
```

---

## Task 3: Create Hero Component

**File:** Create `components/Hero.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          LLM Admin
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-4">
          一个软件，两种协议，所有模型
        </p>
        <p className="text-lg text-gray-400">
          本地 AI 网关，连接所有主流模型供应商
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16"
      >
        <div className="flex gap-4">
          {["Windows", "macOS", "Linux"].map((platform) => (
            <div
              key={platform}
              className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="text-white/80">{platform}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

---

## Task 4: Create Features Component

**File:** Create `components/Features.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "自定义路由",
    description: "灵活配置请求路由，精准控制流量走向",
    icon: "🔀",
  },
  {
    title: "多种供应商",
    description: "支持 OpenAI、Anthropic、Ollama 等多种 API",
    icon: "🔗",
  },
  {
    title: "协议友好",
    description: "兼容 OpenAI 和 Anthropic 双重协议",
    icon: "📡",
  },
  {
    title: "界面友好",
    description: "简洁直观的配置界面，快速上手",
    icon: "✨",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Task 5: Create DownloadSection Component

**File:** Create `components/DownloadSection.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "Windows",
    icon: "🪟",
    url: "https://github.com/llmadmin/llmadmin/releases/latest/download/llmadmin-windows-amd64.deb",
  },
  {
    name: "macOS",
    icon: "🍎",
    url: "https://github.com/llmadmin/llmadmin/releases/latest/download/llmadmin-darwin-arm64.deb",
  },
  {
    name: "Linux",
    icon: "🐧",
    url: "https://github.com/llmadmin/llmadmin/releases/latest/download/llmadmin-linux-amd64.deb",
  },
];

export default function DownloadSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">立即下载</h2>
        <p className="text-gray-400 mb-12">选择你的平台开始使用</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 hover:border-blue-500/50 transition-all"
            >
              <span className="text-2xl">{platform.icon}</span>
              <span className="text-lg font-medium text-white">
                {platform.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Task 6: Create Footer Component

**File:** Create `components/Footer.tsx`

```tsx
export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500">
          © 2024 LLM Admin. 开源项目，MIT 许可证。
        </p>
      </div>
    </footer>
  );
}
```

---

## Task 7: Verify and Test

- [ ] **Step 1: Run development server**

Run: `npm run dev`
Expected: Server starts on http://localhost:3000

- [ ] **Step 2: Verify page loads**

Open browser to http://localhost:3000
Check: Hero section visible with title and slogan
Check: Features section shows 4 cards
Check: Download buttons present for all 3 platforms

- [ ] **Step 3: Test build**

Run: `npm run build`
Expected: Build completes without errors

---

## Verification Checklist

- [ ] Hero displays "LLM Admin" title
- [ ] Hero displays slogan "一个软件，两种协议，所有模型"
- [ ] 4 feature cards visible: 自定义路由, 多供应商, 协议友好, 界面友好
- [ ] 3 platform download buttons: Windows, macOS, Linux
- [ ] Page has dark theme with subtle gradient background
- [ ] Responsive layout works on mobile and desktop
- [ ] No console errors