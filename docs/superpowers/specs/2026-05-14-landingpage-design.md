# Landing Page Design Spec

## Context

本地 AI 网关产品，类似 LiteLLM 但运行在本地。面向所有需要大模型能力的用户（开发者、设计师、文案编辑等）。未来计划扩展语义缓存等功能。目标是提供一个简洁的产品下载页，让用户快速了解产品价值并下载。

## Design Direction

**风格：现代极简** — 大留白，微妙渐变，精致动效，突出高端感

**色调：**
- 主色：深空灰 + 科技蓝渐变
- 背景：深色系 (#0a0a0f) 配微妙蓝紫渐变
- 文字：白色 + 灰色层次
- 强调：蓝/紫渐变用于按钮和关键元素

## Layout Structure

```
[导航栏 - 简洁 Logo + 可能的后续链接]

[Hero Section - 居中]
  - 产品名称 (LLM Admin 或类似)
  - Slogan: "一个软件，两种协议，所有模型"
  - 副标题: 简短描述价值
  - 三平台下载按钮 (Windows / macOS / Linux)

[Features Section]
  - 4 个 Feature 卡片，横向排列
  - 自定义路由 | 多供应商 | 协议友好 | 界面友好

[页脚 - 简洁]
```

## Component Details

### Hero Section
- 垂直居中布局
- 产品名称：大号字体，渐变或发光效果
- Slogan：中等字号，白色
- 副标题：灰色，较小字号
- 下载按钮组：三个图标按钮并排，hover 时发光

### Feature Cards
- 深色半透明背景 (rgba 白色 5-10%)
- 圆角边框
- 图标 + 标题 + 简述
- Hover 时轻微提升 + 边框发光

### Download Buttons
- 平台图标 + 文字
- 圆角胶囊形状
- 渐变背景或边框
- 三按钮等宽排列

## Technical Approach

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + CSS variables for theming
- **Animation**: Framer Motion for micro-interactions
- **Font**: Inter (Google Fonts) 或 Geist (Vercel)
- **Hosting ready**: Static export capable

## Pages

- `/` - Single landing page (no routing needed)

## Verification

1. 页面在桌面端居中显示，宽度合理
2. 三平台下载按钮清晰可见
3. Features 卡片在移动端自适应（可能变为纵向排列）
4. Hero 信息层次清晰
5. 无 console errors