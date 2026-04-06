# Team-KimSeokJin
# IdolCare  AI

## GitHub Repository Structure

```bash
Idol-care-ai/
│
├── public/
│   ├── images/
│   │   ├── hero-dashboard.png
│   │   ├── elderly-avatar-1.png
│   │   ├── elderly-avatar-2.png
│   │   ├── family-photo-memory.png
│   │   └── logo.png
│   ├── icons/
│   └── audio/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── FloatingHealthCards.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── DashboardPreview.tsx
│   │   ├── MultiAgentSection.tsx
│   │   ├── EmotionalWellness.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   ├── GlassCard.tsx
│   │   ├── HealthRing.tsx
│   │   ├── GaugeMeter.tsx
│   │   ├── MoodGraph.tsx
│   │   ├── WeeklyTrendChart.tsx
│   │   ├── VoiceStressChart.tsx
│   │   ├── MedicineCompletionChart.tsx
│   │   └── AgentNode.tsx
│   │
│   ├── data/
│   │   ├── features.ts
│   │   ├── testimonials.ts
│   │   ├── dashboardStats.ts
│   │   └── agents.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── styles/
│   │   └── animations.css
│   │
│   └── types/
│       └── index.ts
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── README.md
└── .gitignore
```

---

# Recommended Tech Stack

* Frontend: Next.js + React + TypeScript
* Styling: Tailwind CSS
* Animation: Framer Motion
* Icons: Lucide React
* Charts: Recharts
* UI: Glassmorphism + Gradient Cards + Dark Mode

---

# Suggested npm Packages

```bash
npm install framer-motion lucide-react recharts clsx tailwind-merge
```

For Tailwind setup:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

# Hero Section Layout

## Left Side

* Main heading
* Supporting text
* CTA buttons
* Small emotional quote banner

## Right Side

* Futuristic dashboard mockup
* Floating telemetry cards
* Heart rate line
* Mood ring
* Sleep score card
* Hydration gauge
* Memory alert notifications

---

# Feature Cards

Each card should contain:

* Lucide icon
* Title
* Short description
* Small animated status dot
* Glassmorphism background
* Hover lift effect
* Subtle neon border glow

Recommended card grid:

```txt
4 columns desktop
2 columns tablet
1 column mobile
```

---

# Dashboard Preview Widgets

## Main Widgets

1. Hydration Gauge
2. Energy Tire Meter
3. Heart Rate Ring
4. Daily Routine Consistency Score
5. Pit Stop Alert Panel
6. Weekly Health Trend Chart
7. Voice Stress Chart
8. Mood Stability Graph
9. Medicine Completion Progress Chart

---

# Multi-Agent AI Visual Layout

Create a central glowing core with 6 surrounding nodes:

```txt
             Voice Agent
                   |
Health Agent --- Core AI --- Risk Agent
                   |
      Memory Agent     Emotional Agent
                   |
          Caregiver Agent
```

Use:

* Animated connection lines
* Pulsing neon circles
* Hover expansion
* Soft blur glows

---

# Emotional Wellness Section

Widgets:

* Mood tracker slider
* Daily encouragement card
* Music recommendation tile
* Family reminder panel
* Memory timeline carousel
* Voice note cards

Possible text:

"You are doing better than yesterday."

"Family call scheduled in 2 hours."

"Recommended calming playlist: Soft Piano + BTS Acoustic Vibes"

---

# Tailwind Color Palette

```js
colors: {
  background: '#050505',
  panel: '#111111',
  glass: 'rgba(255,255,255,0.08)',
  redGlow: '#ff3b3b',
  neonBlue: '#4cc9f0',
  purpleGlow: '#9b5de5',
  silver: '#c0c0c0',
  success: '#22c55e',
  warning: '#facc15',
  danger: '#ef4444',
}
```

---

# Example README Intro

```md
# PitStop Care AI

PitStop Care AI is a futuristic elderly healthcare monitoring platform inspired by Formula 1 dashboards and emotional wellness systems.

The platform combines health telemetry, emotional analysis, AI-driven recommendations, and family support into a premium racing-inspired interface.

## Features
- Elderly health monitoring
- Emotional wellness tracking
- Voice drift analysis
- Daily risk prediction
- Memory preservation
- Caregiver burnout alerts
- AI multi-agent monitoring system
```

---

# Suggested GitHub Repository Name

`idol-care-ai`

Alternative names:

* `idolcare-health-dashboard`
* `f1-care-ai`
* `elder-race-monitor`
* `caregrid-ai`
* `telemetry-health-ai`

---

# Best Folder to Start First

1. Navbar
2. Hero Section
3. Floating Cards
4. Features Grid
5. Dashboard Preview
6. Multi-Agent Network
7. Emotional Wellness
8. Testimonials
9. Footer

This order is fastest for hackathon execution and keeps the landing page visually complete early.
