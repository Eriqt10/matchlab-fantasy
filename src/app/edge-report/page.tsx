'use client'

import { useState } from 'react'
import { RefreshCw, AlertTriangle, TrendingUp, Shield } from 'lucide-react'

// TODO: Replace with API fetch
const MOCK_CAPTAIN_PICKS = [
  { rank: 1, player: 'Erling Haaland', team: 'Man City', opponent: 'West Ham (H)', odds: 1.36, prob: 66.8, pos: 'FWD', xPts: 2.67, confidence: 'ELITE' },
  { rank: 2, player: 'Mohamed Salah', team: 'Liverpool', opponent: 'Spurs (A)', odds: 2.38, prob: 38.2, pos: 'MID', xPts: 1.91, confidence: 'HIGH' },
  { rank: 3, player: 'Phil Foden', team: 'Man City', opponent: 'West Ham (H)', odds: 2.20, prob: 41.3, pos: 'MID', xPts: 2.07, confidence: 'HIGH' },
  { rank: 4, player: 'Antoine Semenyo', team: 'Bournemouth', opponent: 'Burnley (H)', odds: 2.25, prob: 40.4, pos: 'FWD', xPts: 1.62, confidence: 'HIGH' },
  { rank: 5, player: 'Omar Marmoush', team: 'Man City', opponent: 'West Ham (H)', odds: 1.95, prob: 46.6, pos: 'FWD', xPts: 1.86, confidence: 'HIGH' },
  { rank: 6, player: 'Eli Kroupi', team: 'Bournemouth', opponent: 'Burnley (H)', odds: 2.05, prob: 44.3, pos: 'FWD', xPts: 1.77, confidence: 'HIGH' },
  { rank: 7, player: 'Cole Palmer', team: 'Chelsea', opponent: 'Villa (A)', odds: 2.50, prob: 36.4, pos: 'MID', xPts: 1.82, confidence: 'MEDIUM' },
  { rank: 8, player: 'Bukayo Saka', team: 'Arsenal', opponent: 'Brighton (H)', odds: 2.60, prob: 35.0, pos: 'MID', xPts: 1.75, confidence: 'MEDIUM' },
]

const MOCK_CS_PICKS = [
  { rank: 1, team: 'Liverpool', venue: 'A', opponent: 'Spurs', odds: 2.10, csProb: 43.3, cohesion: 97, adjProb: 47.1, confidence: 'ELITE' },
  { rank: 2, team: 'Man City', venue: 'H', opponent: 'West Ham', odds: 1.80, csProb: 50.5, cohesion: 100, adjProb: 52.8, confidence: 'ELITE' },
  { rank: 3, team: 'Arsenal', venue: 'H', opponent: 'Brighton', odds: 2.25, csProb: 40.4, cohesion: 72, adjProb: 37.2, confidence: 'HIGH' },
  { rank: 4, team: 'Newcastle', venue: 'H', opponent: 'Everton', odds: 2.50, csProb: 36.4, cohesion: 84, adjProb: 35.8, confidence: 'HIGH' },
  { rank: 5, team: 'Chelsea', venue: 'A', opponent: 'Villa', odds: 3.00, csProb: 30.3, cohesion: 62, adjProb: 25.1, confidence: 'MEDIUM' },
]

const MOCK_BUZZ = [
  { player: 'Mohamed Salah', status: 'CAUTION', newsCount: 3, multiplier: 0.90, latest: '"Felt like humiliation" - Egypt reacts to Salah\'s Liverpool row' },
]

const GAMEWEEKS = [
  { id: 'gw17', label: 'GW17 (Dec 20-22)' },
  { id: 'gw18', label: 'GW18 (Dec 26-28)' },
]

function ConfidenceBadge({ level }: { level: string }) {
  const classes = {
    ELITE: 'confidence-elite',
    HIGH: 'confidence-high',
    MEDIUM: 'confidence-medium',
    LOW: 'confidence-low',
  }[level] || 'confidence-low'

  return (
    <span className={`px-2 py-1 rounded text-xs ${classes}`}>
      {level}
    </span>
  )
}

function BuzzBadge({ status }: { status: string }) {
  const classes = {
    POSITIVE: 'buzz-positive',
    NEUTRAL: 'buzz-neutral',
    CAUTION: 'buzz-caution',
    'RED FLAG': 'buzz-red-flag',
  }[status] || 'buzz-neutral'

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${classes}`}>
      {status}
    </span>
  )
}

export default function EdgeReportPage() {
  const [selectedGW, setSelectedGW] = useState('gw17')
  const [isLoading, setIsLoading] = useState(false)

  const refreshData = () => {
    setIsLoading(true)
    // TODO: Fetch fresh data from API
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">FPL Edge Report</h1>
            <p className="text-slate-500 text-sm mt-1">
              What bookmakers know that FPL managers don't
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Gameweek Selector */}
            <select
              value={selectedGW}
              onChange={(e) => setSelectedGW(e.target.value)}
              className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {GAMEWEEKS.map((gw) => (
                <option key={gw.id} value={gw.id}>
                  {gw.label}
                </option>
              ))}
            </select>

            {/* Refresh Button */}
            <button
              onClick={refreshData}
              disabled={isLoading}
              className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm hover:bg-slate-50 transition flex items-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Buzz Alerts */}
        {MOCK_BUZZ.length > 0 && (
          <div className="card mb-8">
            <div className="card-header flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h2 className="font-semibold text-slate-900">News Buzz Alerts</h2>
            </div>
            <div className="card-body">
              {MOCK_BUZZ.map((buzz, i) => (
                <div key={i} className="flex items-start gap-4">
                  <BuzzBadge status={buzz.status} />
                  <div>
                    <p className="font-medium text-slate-900">{buzz.player}</p>
                    <p className="text-sm text-slate-500 mt-1">
                      {buzz.newsCount} news items | {Math.round(buzz.multiplier * 100)}% multiplier
                    </p>
                    <p className="text-sm text-slate-600 mt-2 italic">
                      "{buzz.latest}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Captain Picks */}
          <div className="card">
            <div className="card-header flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-primary" />
              <h2 className="font-semibold text-slate-900">Captain Picks</h2>
              <span className="text-xs text-slate-500 ml-auto">Anytime Scorer Odds</span>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Match</th>
                    <th>Odds</th>
                    <th>P(Goal)</th>
                    <th>xPts</th>
                    <th>Conf</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_CAPTAIN_PICKS.map((pick) => (
                    <tr key={pick.rank}>
                      <td className="font-mono text-slate-400">{pick.rank}</td>
                      <td>
                        <div>
                          <span className="font-medium text-slate-900">{pick.player}</span>
                          <span className="text-xs text-slate-500 ml-2">{pick.pos}</span>
                        </div>
                        <span className="text-xs text-slate-500">{pick.team}</span>
                      </td>
                      <td className="text-sm text-slate-600">{pick.opponent}</td>
                      <td className="font-mono">{pick.odds.toFixed(2)}</td>
                      <td className="font-mono">{pick.prob.toFixed(1)}%</td>
                      <td className="font-mono font-semibold">{pick.xPts.toFixed(2)}</td>
                      <td><ConfidenceBadge level={pick.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Clean Sheet Picks */}
          <div className="card">
            <div className="card-header flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-primary" />
              <h2 className="font-semibold text-slate-900">Clean Sheet Picks</h2>
              <span className="text-xs text-slate-500 ml-auto">DEF/GK Targets</span>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>vs</th>
                    <th>Odds</th>
                    <th>P(CS)</th>
                    <th>Cohesion</th>
                    <th>Conf</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_CS_PICKS.map((pick) => (
                    <tr key={pick.rank}>
                      <td className="font-mono text-slate-400">{pick.rank}</td>
                      <td>
                        <span className="font-medium text-slate-900">{pick.team}</span>
                        <span className="text-xs text-slate-500 ml-1">({pick.venue})</span>
                      </td>
                      <td className="text-sm text-slate-600">{pick.opponent}</td>
                      <td className="font-mono">{pick.odds.toFixed(2)}</td>
                      <td className="font-mono">{pick.csProb.toFixed(1)}%</td>
                      <td>
                        <span className={`font-mono ${pick.cohesion >= 80 ? 'text-green-600' : pick.cohesion >= 60 ? 'text-amber-600' : 'text-red-600'}`}>
                          {pick.cohesion}%
                        </span>
                      </td>
                      <td><ConfidenceBadge level={pick.confidence} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Methodology Note */}
        <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200 text-sm text-slate-600">
          <p className="font-medium text-slate-900 mb-2">How we calculate this:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Anytime scorer odds converted to true probability (10% vig removed)</li>
            <li>MID position gets +25% xPts boost (5pts vs 4pts per goal)</li>
            <li>Clean sheet probability adjusted by team cohesion score</li>
            <li>Buzz analysis applies 0-15% haircut based on news sentiment</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
