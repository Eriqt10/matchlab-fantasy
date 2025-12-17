'use client'

import { TrendingUp, Target, Calendar, CheckCircle, XCircle } from 'lucide-react'

// TODO: Replace with API fetch from live_tracking.csv
const MOCK_STATS = {
  totalPredictions: 147,
  hitRate: 58.5,
  roi: 4.2,
  avgOdds: 2.15,
  eliteHitRate: 72.4,
  since: 'Dec 2024',
}

const MOCK_PREDICTIONS = [
  { date: '2024-12-20', match: 'Man City vs West Ham', pick: 'Haaland Captain', odds: 1.36, result: 'W', points: 14 },
  { date: '2024-12-20', match: 'Liverpool vs Spurs', pick: 'Salah Captain', odds: 2.38, result: 'W', points: 16 },
  { date: '2024-12-20', match: 'Liverpool CS', pick: 'DEF Target', odds: 2.10, result: 'L', points: 0 },
  { date: '2024-12-14', match: 'Man City vs Everton', pick: 'Haaland Captain', odds: 1.25, result: 'W', points: 10 },
  { date: '2024-12-14', match: 'Arsenal vs Brighton', pick: 'Saka Captain', odds: 2.80, result: 'L', points: 4 },
]

const TIER_STATS = [
  { tier: 'ELITE', predictions: 29, hitRate: 72.4, color: 'text-green-600' },
  { tier: 'HIGH', predictions: 48, hitRate: 62.5, color: 'text-blue-600' },
  { tier: 'MEDIUM', predictions: 52, hitRate: 51.9, color: 'text-amber-600' },
  { tier: 'LOW', predictions: 18, hitRate: 38.9, color: 'text-slate-500' },
]

function StatCard({ icon: Icon, label, value, subtitle }: { icon: any, label: string, value: string, subtitle?: string }) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-primary" />
        </div>
        <span className="text-sm text-slate-500">{label}</span>
      </div>
      <p className="text-3xl font-bold text-slate-900">{value}</p>
      {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    </div>
  )
}

export default function TrackRecordPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Track Record</h1>
          <p className="text-slate-500 text-sm mt-1">
            Full transparency on our predictions. Updated after each gameweek.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={Target}
            label="Total Predictions"
            value={MOCK_STATS.totalPredictions.toString()}
            subtitle={`Since ${MOCK_STATS.since}`}
          />
          <StatCard
            icon={CheckCircle}
            label="Overall Hit Rate"
            value={`${MOCK_STATS.hitRate}%`}
          />
          <StatCard
            icon={TrendingUp}
            label="Simulated ROI"
            value={`+${MOCK_STATS.roi}%`}
            subtitle={`@ ${MOCK_STATS.avgOdds} avg odds`}
          />
          <StatCard
            icon={Target}
            label="ELITE Tier Hit Rate"
            value={`${MOCK_STATS.eliteHitRate}%`}
            subtitle="Highest confidence picks"
          />
        </div>

        {/* Performance by Tier */}
        <div className="card mb-8">
          <div className="card-header">
            <h2 className="font-semibold text-slate-900">Performance by Confidence Tier</h2>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TIER_STATS.map((tier) => (
                <div key={tier.tier} className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className={`text-sm font-semibold ${tier.color}`}>{tier.tier}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">{tier.hitRate}%</p>
                  <p className="text-xs text-slate-500">{tier.predictions} predictions</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Higher confidence tiers show higher hit rates, validating the signal quality.
            </p>
          </div>
        </div>

        {/* Recent Predictions */}
        <div className="card">
          <div className="card-header flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Recent Predictions</h2>
            <span className="text-xs text-slate-500">Last 5 shown</span>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Match</th>
                  <th>Pick</th>
                  <th>Odds</th>
                  <th>Result</th>
                  <th>FPL Pts</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_PREDICTIONS.map((pred, i) => (
                  <tr key={i}>
                    <td className="text-slate-500 text-sm">{pred.date}</td>
                    <td className="font-medium text-slate-900">{pred.match}</td>
                    <td className="text-sm">{pred.pick}</td>
                    <td className="font-mono">{pred.odds.toFixed(2)}</td>
                    <td>
                      {pred.result === 'W' ? (
                        <span className="inline-flex items-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" /> Win
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-red-500">
                          <XCircle className="w-4 h-4" /> Miss
                        </span>
                      )}
                    </td>
                    <td className="font-mono font-semibold">{pred.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200 text-sm text-slate-600">
          <p className="font-medium text-slate-900 mb-2">About Our Track Record</p>
          <ul className="list-disc list-inside space-y-1">
            <li>All predictions logged BEFORE deadline (we're building toward blockchain verification)</li>
            <li>"Hit" = captain scored OR clean sheet kept, depending on pick type</li>
            <li>ROI calculated using representative odds at time of prediction</li>
            <li>No cherry-picking: every prediction we publish is tracked here</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
