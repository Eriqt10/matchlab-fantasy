# Asset Placement Guide

## Your Logos (Uploaded)

You've uploaded these - they're ready to use:
- `favicon-dark.svg` - Teal icon on transparent (nav bar)
- `favicon-light.svg` - Teal icon for light contexts (footer on navy)
- `logo-dark.svg` - Full logo for dark backgrounds
- `logo-light.svg` - Full logo for light backgrounds
- `logo-horizontal-dark.svg` - Wide format
- `logo-horizontal-light.svg` - Wide format

## Converting SVG to ICO (for old browsers)

Most modern browsers support SVG favicons, but for full compatibility:

### Option 1: Online Converter (Easiest)
1. Go to https://favicon.io/favicon-converter/
2. Upload your `favicon-dark.svg`
3. Download the zip
4. Extract `favicon.ico` and `favicon-16x16.png`, `favicon-32x32.png`
5. Drop them in this `public/` folder

### Option 2: Figma Export
1. Open your favicon design in Figma
2. Select the artboard
3. In Export panel (right sidebar), click + to add export
4. Set format to PNG, size to 32x32
5. Export and rename to `favicon-32.png`
6. Repeat for 16x16
7. Use https://icoconvert.com/ to combine into .ico

### For Apple Touch Icon
Export a 180x180 PNG version and name it `apple-touch-icon.png`

## Social Sharing Image (OG Image) - STILL NEEDED

You still need this for Twitter/Facebook/LinkedIn previews:

**Size**: 1200x630 pixels

**What to include**:
- Your horizontal logo
- Tagline: "What bookmakers know that FPL managers don't"
- Navy background (#061A2A) with teal (#1EC9B6) accent

**Create in Figma**:
1. New frame: 1200x630
2. Background: #061A2A
3. Add horizontal logo (cream version)
4. Add tagline in cream (#F1F0EB)
5. Maybe add a subtle data visualization graphic
6. Export as PNG → `og-image.png`

**Or use**: https://og-playground.vercel.app/

## Current Setup

The site is configured to use:
- `favicon-dark.svg` for browser tabs (works in Chrome, Firefox, Safari, Edge)
- Your SVG logos in the nav and footer
- All brand colors are wired up in `tailwind.config.ts`

## Brand Colors Reference

| Name | Hex | Usage |
|------|-----|-------|
| **Navy** | #061A2A | Dark backgrounds, main text |
| **Teal** | #1EC9B6 | Primary accent, buttons, links |
| **Cream** | #F1F0EB | Light text on dark, subtle backgrounds |
| Gold | #F5A623 | Warnings, medium confidence |
| Soft Blue | #5DADE2 | Info, high confidence |
| Red | #E74C3C | Danger, negative, buzz red flags |
