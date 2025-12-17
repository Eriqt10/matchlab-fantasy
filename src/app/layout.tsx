import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MatchLab Fantasy | Odds-Based FPL Picks',
  description: 'What bookmakers know that FPL managers don\'t. Captain picks and clean sheet predictions powered by real betting odds.',
  keywords: ['FPL', 'Fantasy Premier League', 'captain picks', 'betting odds', 'clean sheet'],
  authors: [{ name: 'MatchLab Sports' }],
  icons: {
    icon: [
      { url: '/favicon-dark.ico', sizes: '32x32' },
      { url: '/favicon-dark.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon-dark.svg',
  },
  openGraph: {
    title: 'MatchLab Fantasy | Odds-Based FPL Picks',
    description: 'What bookmakers know that FPL managers don\'t.',
    url: 'https://matchlabfantasy.com',
    siteName: 'MatchLab Fantasy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MatchLab Fantasy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MatchLab Fantasy | Odds-Based FPL Picks',
    description: 'What bookmakers know that FPL managers don\'t.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation - Navy header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-md border-b border-brand-navy-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3">
                <Image
                  src="/favicon-dark.svg"
                  alt="MatchLab"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold text-brand-cream">MatchLab Fantasy</span>
                <span className="bg-brand-primary/20 text-brand-primary px-2.5 py-0.5 rounded-full text-xs font-semibold">BETA</span>
              </a>

              {/* Nav Links */}
              <div className="hidden md:flex items-center gap-6">
                <a href="/edge-report" className="text-sm font-medium text-brand-cream/70 hover:text-brand-primary transition">
                  Edge Report
                </a>
                <a href="/track-record" className="text-sm font-medium text-brand-cream/70 hover:text-brand-primary transition">
                  Track Record
                </a>
                <a
                  href="#waitlist"
                  className="btn-primary text-sm py-2"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-brand-navy text-brand-cream py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/favicon-light.svg"
                  alt="MatchLab"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-sm font-medium">MatchLab Fantasy</span>
              </div>
              <p className="text-xs text-brand-cream/60">
                For entertainment purposes. Always gamble responsibly.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
