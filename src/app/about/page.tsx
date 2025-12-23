'use client'

import { TrendingUp, Shield, Zap, BarChart3, Clock, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-secondary">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            What Bookmakers Know That FPL Managers Don't
          </h1>
          <p className="text-lg lg:text-xl text-brand-cream/80 max-w-3xl mx-auto">
            MatchLab Fantasy uses betting market intelligence to give you an edge
            that xG projections alone can't provide. Sharp money moves before news breaks.
            We make sure you see it first.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">
            The Information Gap in FPL
          </h2>

          <div className="prose prose-lg max-w-none text-text-secondary">
            <p>
              Every FPL analysis site shows you the same data: expected goals,
              expected assists, fixture difficulty ratings. They're all pulling from
              the same public sources—FBref, Opta, the official FPL API.
            </p>

            <p>
              Meanwhile, betting markets process millions of pounds in wagers every week.
              Professional syndicates employ teams of analysts to find edges. When they
              spot value, they bet—and the odds move. This information is public,
              but <strong>almost no FPL manager uses it</strong>.
            </p>

            <p>
              That's the gap we fill.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-surface-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-12 text-center">
            How We Turn Odds Into Edge
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-brand-cream-dark">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">
                1. We Collect Odds Data
              </h3>
              <p className="text-sm text-text-secondary">
                Four times daily, we pull anytime goalscorer odds from 13 bookmakers
                including sharp books like Pinnacle. This is the same data professional
                bettors use.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-cream-dark">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">
                2. We Convert to Probability
              </h3>
              <p className="text-sm text-text-secondary">
                Betting odds encode implied probability. When Salah is priced at 1.90
                to score anytime, the market is saying there's roughly a 47% chance
                he finds the net.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-cream-dark">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">
                3. We Rank Your Options
              </h3>
              <p className="text-sm text-text-secondary">
                We combine odds-implied goal probability with FPL point multipliers
                (midfielders get 5pts, forwards get 4pts) to rank captain picks by
                expected points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Betting Odds */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">
            Why Betting Odds Are Better Than xG Alone
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">
                  Markets are forward-looking
                </h3>
                <p className="text-text-secondary">
                  xG is based on past performance. Odds incorporate team news, tactical
                  changes, and insider information that hasn't reached public analysts yet.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">
                  Line movement reveals sharp money
                </h3>
                <p className="text-text-secondary">
                  When odds shorten rapidly, it often means professional bettors are
                  backing a player. This signal appears hours before public news breaks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">
                  Market efficiency is your friend
                </h3>
                <p className="text-text-secondary">
                  Betting markets are ~98% efficient. That means odds are extremely
                  accurate predictors of outcomes—more accurate than any individual
                  analyst's projections.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">
                  Real money on the line
                </h3>
                <p className="text-text-secondary">
                  Pundits face no consequences for wrong predictions. Bookmakers lose
                  money when they're wrong. Their prices reflect genuine conviction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-surface-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-12 text-center">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">
                  Captain Probability Rankings
                </h3>
                <p className="text-sm text-text-secondary">
                  Every gameweek, we rank potential captains by odds-implied goal
                  probability × FPL point multiplier. No vibes, just math.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Shield className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">
                  Clean Sheet Probabilities
                </h3>
                <p className="text-sm text-text-secondary">
                  Defensive picks ranked by clean sheet odds, adjusted for our
                  proprietary team cohesion metric (lineup familiarity).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Zap className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">
                  Line Movement Alerts
                </h3>
                <p className="text-sm text-text-secondary">
                  Get notified when sharp money moves odds significantly before
                  the FPL deadline. Know what professionals know.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">
                  Pre-Deadline Updates
                </h3>
                <p className="text-sm text-text-secondary">
                  Data refreshes 4x daily. Get the latest odds-implied insights
                  right up until the deadline locks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">
            Why We Built This
          </h2>

          <div className="bg-surface-secondary rounded-xl p-8 border border-brand-cream-dark">
            <blockquote className="text-lg text-text-secondary italic mb-6">
              "MatchLab Fantasy was built by a data scientist who's never played FPL.
              No favorite players, no tribal loyalties—just rigorous probability analysis
              applied to a game where emotions run high and edges hide in plain sight."
            </blockquote>

            <p className="text-text-secondary mb-4">
              When you don't have a favorite team, you see the data differently. There's
              no temptation to captain your club's striker when the odds say otherwise.
              No reluctance to back a rival's defender for a clean sheet.
            </p>

            <p className="text-text-secondary">
              This objectivity is our edge—and now it's yours. Every recommendation
              comes from probability analysis, not punditry. We don't have opinions.
              We have numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-16 bg-surface-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-8">
            Built by Quants, Not Pundits
          </h2>

          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            MatchLab Fantasy is built on the same analytical foundation used by
            professional sports bettors. Our models incorporate Dixon-Coles probability
            distributions, Bayesian hierarchical modeling, and market efficiency analysis
            from peer-reviewed sports analytics literature.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-3xl font-bold text-brand-primary">477K+</div>
              <div className="text-sm text-text-muted">Player-match records</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-primary">13</div>
              <div className="text-sm text-text-muted">Bookmakers tracked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-primary">4x</div>
              <div className="text-sm text-text-muted">Daily data updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Stop Guessing. Start Knowing.
          </h2>
          <p className="text-brand-cream/80 mb-8">
            Join FPL managers who use betting market intelligence
            to make smarter captain picks.
          </p>
          <a
            href="/edge-report"
            className="inline-block px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary-hover transition"
          >
            View This Week's Edge Report
          </a>
        </div>
      </section>
    </div>
  )
}
