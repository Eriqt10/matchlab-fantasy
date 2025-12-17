import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-secondary to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="beta-badge mb-4 inline-block">BETA</span>
            <h1 className="text-4xl sm:text-6xl font-bold text-brand-navy tracking-tight">
              What bookmakers know
              <br />
              <span className="text-brand-primary">that FPL managers don't</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
              Captain picks and clean sheet predictions powered by real betting odds.
              Sharp money moves before team news breaks.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/edge-report"
                className="btn-primary flex items-center gap-2 rounded-xl"
              >
                View Edge Report
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/track-record"
                className="btn-secondary rounded-xl"
              >
                See Our Track Record
              </a>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-x-0 -bottom-40 h-40 bg-gradient-to-t from-white" />
      </section>

      {/* Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Prop 1 */}
            <div className="card p-8">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">
                Odds-Based Rankings
              </h3>
              <p className="text-text-secondary">
                Anytime scorer odds capture team news, form, and lineup expectations
                that xG models miss. When bookmakers and xG disagree, trust the money.
              </p>
            </div>

            {/* Prop 2 */}
            <div className="card p-8">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">
                Cohesion-Adjusted Clean Sheets
              </h3>
              <p className="text-text-secondary">
                High-turnover squads leak goals even with good odds. Our cohesion
                model identifies which defensive picks are actually reliable.
              </p>
            </div>

            {/* Prop 3 */}
            <div className="card p-8">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">
                Real-Time Buzz Analysis
              </h3>
              <p className="text-text-secondary">
                Automated news scanning detects contract disputes, injury doubts,
                and rotation risks before they're priced in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy">How It Works</h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Our edge comes from information arbitrage between betting markets and fantasy.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-brand-navy">Collect Odds</h3>
              <p className="text-sm text-text-secondary mt-2">
                Pull anytime scorer & clean sheet odds from 13+ bookmakers
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-brand-navy">Convert to Probability</h3>
              <p className="text-sm text-text-secondary mt-2">
                Remove bookmaker margin, find true implied probabilities
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-brand-navy">Apply Adjustments</h3>
              <p className="text-sm text-text-secondary mt-2">
                Factor in cohesion scores, news buzz, and position bonuses
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-brand-navy">Rank by xPts</h3>
              <p className="text-sm text-text-secondary mt-2">
                Output FPL-optimized rankings with confidence tiers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-cream mb-4">
            Get Early Access
          </h2>
          <p className="text-brand-cream/70 mb-8">
            Join the waitlist for premium features: line movement alerts,
            full model access, and personalized recommendations.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-brand-cream placeholder:text-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Join Waitlist
            </button>
          </form>
          <p className="text-xs text-brand-cream/40 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}
