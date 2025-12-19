import { ArrowRight, TrendingUp, Shield, Zap, Target, LineChart, Bell, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - with background image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">
                BETA
              </span>
              <span className="text-brand-cream/60 text-sm">
                Free during beta period
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-cream tracking-tight leading-tight">
              What bookmakers know
              <span className="block text-brand-primary mt-2">that FPL managers don't</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-brand-cream/80 leading-relaxed">
              Captain picks and clean sheet predictions powered by real betting odds.
              Sharp money moves before team news breaks.
            </p>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-6 text-brand-cream/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                <span>13 bookmakers analyzed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                <span>Updated 4x daily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                <span>Pre-deadline alerts</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/edge-report"
                className="btn-primary flex items-center gap-2 rounded-xl text-lg px-8 py-4"
              >
                View This Week's Edge
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/track-record"
                className="px-8 py-4 text-brand-cream/80 hover:text-brand-primary transition font-medium flex items-center gap-2"
              >
                <Target className="w-5 h-5" />
                See Track Record
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-brand-navy-light py-6 border-y border-brand-navy-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-2xl font-bold text-brand-primary">92%</div>
              <div className="text-sm text-brand-cream/60">Top 10 captain accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-primary">+2.3</div>
              <div className="text-sm text-brand-cream/60">Avg pts vs. popular pick</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-primary">4x</div>
              <div className="text-sm text-brand-cream/60">Daily odds updates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-primary">13</div>
              <div className="text-sm text-brand-cream/60">Bookmakers tracked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy">
              Every FPL site has xG.
              <span className="text-brand-primary"> We have sharp money.</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Betting markets price in information that xG models miss: team news leaks,
              tactical changes, and rotation risks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Prop 1 */}
            <div className="card p-8 hover:shadow-fintech-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 rounded-2xl flex items-center justify-center mb-5">
                <TrendingUp className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Odds-Based Captain Rankings
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Anytime scorer odds capture team news, form, and lineup expectations
                that xG models miss. When bookmakers and xG disagree, trust the money.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-cream-dark">
                <span className="text-sm text-brand-primary font-medium">
                  Pinnacle sharp lines included →
                </span>
              </div>
            </div>

            {/* Prop 2 */}
            <div className="card p-8 hover:shadow-fintech-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 rounded-2xl flex items-center justify-center mb-5">
                <Shield className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Cohesion-Adjusted Clean Sheets
              </h3>
              <p className="text-text-secondary leading-relaxed">
                High-turnover squads leak goals even with good odds. Our cohesion
                model identifies which defensive picks are actually reliable.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-cream-dark">
                <span className="text-sm text-brand-primary font-medium">
                  Familiarity scores for every team →
                </span>
              </div>
            </div>

            {/* Prop 3 */}
            <div className="card p-8 hover:shadow-fintech-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 rounded-2xl flex items-center justify-center mb-5">
                <Zap className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Real-Time Buzz Monitoring
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Automated news scanning detects contract disputes, injury doubts,
                and rotation risks before they're priced in.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-cream-dark">
                <span className="text-sm text-brand-primary font-medium">
                  Pre-deadline alerts coming soon →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - with topography pattern */}
      <section className="py-20 bg-brand-navy bg-topography relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-cream">How It Works</h2>
            <p className="mt-4 text-brand-cream/70 max-w-2xl mx-auto">
              Our edge comes from information arbitrage between betting markets and fantasy platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/20 border-2 border-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                <LineChart className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-bold text-brand-cream text-lg">Collect Odds</h3>
              <p className="text-sm text-brand-cream/60 mt-3 leading-relaxed">
                Pull anytime scorer & clean sheet odds from 13+ bookmakers including Pinnacle
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/20 border-2 border-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Target className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-bold text-brand-cream text-lg">Find True Probability</h3>
              <p className="text-sm text-brand-cream/60 mt-3 leading-relaxed">
                Remove bookmaker margin and extract sharp implied probabilities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/20 border-2 border-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Shield className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-bold text-brand-cream text-lg">Apply Our Models</h3>
              <p className="text-sm text-brand-cream/60 mt-3 leading-relaxed">
                Factor in cohesion scores, news buzz, and FPL position bonuses
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/20 border-2 border-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                <TrendingUp className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-bold text-brand-cream text-lg">Rank by Edge</h3>
              <p className="text-sm text-brand-cream/60 mt-3 leading-relaxed">
                Output FPL-optimized rankings with confidence tiers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">Coming Soon</span>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">Premium Features</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-brand-cream-dark">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">Line Movement Alerts</h3>
                <p className="text-text-secondary text-sm mt-1">
                  Get notified when sharp money moves on your players before FPL deadline
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-xl border border-brand-cream-dark">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <LineChart className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">Historical Odds Data</h3>
                <p className="text-text-secondary text-sm mt-1">
                  See how odds evolved throughout the week and spot patterns
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-xl border border-brand-cream-dark">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">Differential Finder</h3>
                <p className="text-text-secondary text-sm mt-1">
                  Identify high-upside, low-ownership picks backed by sharp money
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-xl border border-brand-cream-dark">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">API Access</h3>
                <p className="text-text-secondary text-sm mt-1">
                  Integrate our odds-based projections into your own tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-24 bg-brand-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-brand-cream mb-4">
            Get Early Access
          </h2>
          <p className="text-brand-cream/70 mb-8 text-lg">
            Join the waitlist for premium features: line movement alerts,
            full model access, and personalized recommendations.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-brand-cream placeholder:text-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-lg"
            />
            <button
              type="submit"
              className="btn-primary text-lg px-8 py-4 rounded-xl whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
          <p className="text-sm text-brand-cream/40 mt-6">
            No spam. Unsubscribe anytime. Currently free during beta.
          </p>
        </div>
      </section>
    </div>
  )
}
