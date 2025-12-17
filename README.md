# MatchLab Fantasy

> "What bookmakers know that FPL managers don't"

## Roadmap

### Phase 1: MVP Dashboard (Week 1-2)
- [ ] Landing page with value proposition
- [ ] FPL Edge Report dashboard
  - [ ] Captain picks table (odds-based)
  - [ ] Clean sheet picks table (with cohesion)
  - [ ] Buzz alerts section
  - [ ] Gameweek selector
- [ ] Beta badge + waitlist signup

### Phase 2: Track Record (Week 3)
- [ ] Historical predictions page
- [ ] ROI/hit rate charts
- [ ] Transparency messaging

### Phase 3: Auth & Gated Features (Week 4+)
- [ ] User authentication
- [ ] Full dashboard access
- [ ] Line movement alerts
- [ ] API access for power users

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Tremor (data dashboard components)
- **Backend**: FastAPI (Python models)
- **Hosting**: Vercel (frontend) + Railway (API)
- **Database**: Supabase (future)

## Project Structure

```
matchlab-fantasy/
├── public/
│   ├── logo.svg          # Main logo (drop yours here)
│   ├── logo-dark.svg     # Dark mode variant
│   ├── favicon.ico       # Browser tab icon
│   └── og-image.png      # Social sharing image (1200x630)
│
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles + color scheme
│   │   ├── edge-report/
│   │   │   └── page.tsx          # FPL Edge Report dashboard
│   │   ├── track-record/
│   │   │   └── page.tsx          # Prediction history
│   │   └── api/
│   │       └── edge-report/
│   │           └── route.ts      # API endpoint
│   │
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── captain-table.tsx     # Captain picks table
│   │   ├── cs-table.tsx          # Clean sheet table
│   │   ├── buzz-alerts.tsx       # News buzz section
│   │   ├── gameweek-selector.tsx # GW dropdown
│   │   └── beta-badge.tsx        # Beta indicator
│   │
│   └── lib/
│       ├── utils.ts              # Utility functions
│       └── api.ts                # API client
│
├── tailwind.config.ts            # Tailwind + color scheme
├── next.config.js
├── package.json
└── tsconfig.json
```

## Logo & Assets

Drop your assets here:
- `public/logo.svg` - Main logo
- `public/favicon.ico` - Browser icon (convert from logo)
- `public/og-image.png` - Social sharing (1200x630px)

## Color Scheme

Edit `tailwind.config.ts` to set your brand colors:
```ts
colors: {
  brand: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
    accent: '#your-accent-color',
  }
}
```

## Getting Started

```bash
cd matchlab-fantasy
npm install
npm run dev
```

Open http://localhost:3000
