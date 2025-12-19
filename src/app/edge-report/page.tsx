'use client'

import { useState, useEffect } from 'react'
import { RefreshCw, AlertTriangle, TrendingUp, Shield, Clock, Loader2 } from 'lucide-react'

// Types matching the API response
interface CaptainPick {
  rank: number
  player: string
  team: string
  opponent: string
  fixture: string
  match_date: string
  is_home: boolean
  best_odds: number
  goal_prob: number
  bookmaker: string
  position: string
  expected_pts: number
  confidence: string
  signals: string[]
  odds_display: string
  prob_display: string
}

interface CleanSheetPick {
  rank: number
  team: string
  opponent: string
  fixture: string
  match_date: string
  is_home: boolean
  best_odds: number
  cs_prob: number
  bookmaker: string
  confidence: string
  cohesion_score: number | null
  adjusted_prob: number | null
  prob_display: string
  cohesion_display: string
}

interface BuzzAlert {
  player: string
  team: string
  status: string
  news_count: number
  multiplier: number
  latest_news: string
  signals: string[]
}

interface EdgeReportData {
  meta: {
    generated_at: string
    gameweek: number
    gameweek_id: string
    deadline: string
    league: string
    data_source: string
    error?: string
  }
  captain_picks: CaptainPick[]
  clean_sheets: CleanSheetPick[]
  buzz_alerts: BuzzAlert[]
  errors: string[]
}

const GAMEWEEKS = [
  { id: 'gw17', label: 'GW17 (Dec 20-22)' },
  { id: 'gw18', label: 'GW18 (Dec 26-28)' },
  { id: 'gw19', label: 'GW19 (Dec 29)' },
  { id: 'gw20', label: 'GW20 (Jan 4-5)' },
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
  const statusMap: Record<string, string> = {
    positive: 'buzz-positive',
    neutral: 'buzz-neutral',
    caution: 'buzz-caution',
    red_flag: 'buzz-red-flag',
  }
  const classes = statusMap[status] || 'buzz-neutral'
  const displayStatus = status.replace('_', ' ').toUpperCase()

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${classes}`}>
      {displayStatus}
    </span>
  )
}

function formatTimeAgo(isoString: string): string {
  const date = new Date(isoString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}h ago`
  const diffDays = Math.floor(diffHours / 24)
  return `${diffDays}d ago`
}

export default function EdgeReportPage() {
  const [selectedGW, setSelectedGW] = useState('gw17')
  const [data, setData] = useState<EdgeReportData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Fetch from static JSON file directly (faster than API route for static data)
      const response = await fetch('/data/edge-report.json')

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const jsonData = await response.json()
      setData(jsonData)
    } catch (err) {
      console.error('Failed to fetch edge report:', err)
      setError('Failed to load data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [selectedGW])

  const refreshData = () => {
    fetchData()
  }

  return (
    <div className="min-h-screen bg-surface-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-brand-navy">FPL Edge Report</h1>
            <p className="text-text-secondary text-sm mt-1">
              What bookmakers know that FPL managers don't
            </p>
            {data?.meta && (
              <div className="flex items-center gap-2 mt-2 text-xs text-text-muted">
                <Clock className="w-3 h-3" />
                <span>Updated {formatTimeAgo(data.meta.generated_at)}</span>
                <span className="text-brand-cream-dark">•</span>
                <span>GW{data.meta.gameweek}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Gameweek Selector */}
            <select
              value={selectedGW}
              onChange={(e) => setSelectedGW(e.target.value)}
              className="px-4 py-2 bg-white border border-brand-cream-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
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
              className="px-4 py-2 bg-white border border-brand-cream-dark rounded-lg text-sm hover:bg-surface-secondary transition flex items-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-brand-primary animate-spin" />
            <span className="ml-3 text-text-secondary">Loading odds data...</span>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800">{error}</p>
            <button
              onClick={refreshData}
              className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Data Display */}
        {data && !isLoading && (
          <>
            {/* Buzz Alerts */}
            {data.buzz_alerts && data.buzz_alerts.length > 0 && (
              <div className="card mb-8">
                <div className="card-header flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <h2 className="font-semibold text-brand-navy">News Buzz Alerts</h2>
                </div>
                <div className="card-body space-y-4">
                  {data.buzz_alerts.map((buzz, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <BuzzBadge status={buzz.status} />
                      <div>
                        <p className="font-medium text-brand-navy">
                          {buzz.player}
                          <span className="text-text-secondary font-normal ml-2">({buzz.team})</span>
                        </p>
                        <p className="text-sm text-text-secondary mt-1">
                          {buzz.news_count} news items | {Math.round(buzz.multiplier * 100)}% multiplier
                        </p>
                        {buzz.latest_news && (
                          <p className="text-sm text-text-muted mt-2 italic">
                            "{buzz.latest_news}"
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Data Errors */}
            {data.errors && data.errors.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                <p className="text-amber-800 text-sm">
                  Some data may be incomplete: {data.errors.join(', ')}
                </p>
              </div>
            )}

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Captain Picks */}
              <div className="card">
                <div className="card-header flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-brand-primary" />
                  <h2 className="font-semibold text-brand-navy">Captain Picks</h2>
                  <span className="text-xs text-text-muted ml-auto">Anytime Scorer Odds</span>
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
                      {data.captain_picks.map((pick) => (
                        <tr key={`${pick.rank}-${pick.player}`}>
                          <td className="font-mono text-text-muted">{pick.rank}</td>
                          <td>
                            <div>
                              <span className="font-medium text-brand-navy">{pick.player}</span>
                              <span className="text-xs text-text-muted ml-2">{pick.position}</span>
                            </div>
                            <span className="text-xs text-text-secondary">{pick.team}</span>
                          </td>
                          <td className="text-sm text-text-secondary">
                            {pick.opponent} {pick.is_home ? '(H)' : '(A)'}
                          </td>
                          <td className="font-mono">{pick.best_odds.toFixed(2)}</td>
                          <td className="font-mono">{(pick.goal_prob * 100).toFixed(1)}%</td>
                          <td className="font-mono font-semibold text-brand-navy">{pick.expected_pts.toFixed(2)}</td>
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
                  <h2 className="font-semibold text-brand-navy">Clean Sheet Picks</h2>
                  <span className="text-xs text-text-muted ml-auto">DEF/GK Targets</span>
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
                      {data.clean_sheets.map((pick) => (
                        <tr key={`${pick.rank}-${pick.team}`}>
                          <td className="font-mono text-text-muted">{pick.rank}</td>
                          <td>
                            <span className="font-medium text-brand-navy">{pick.team}</span>
                            <span className="text-xs text-text-muted ml-1">
                              ({pick.is_home ? 'H' : 'A'})
                            </span>
                          </td>
                          <td className="text-sm text-text-secondary">{pick.opponent}</td>
                          <td className="font-mono">{pick.best_odds.toFixed(2)}</td>
                          <td className="font-mono">{(pick.cs_prob * 100).toFixed(1)}%</td>
                          <td>
                            {pick.cohesion_score !== null ? (
                              <span className={`font-mono ${
                                pick.cohesion_score >= 0.8 ? 'text-success' :
                                pick.cohesion_score >= 0.6 ? 'text-warning' :
                                'text-danger'
                              }`}>
                                {(pick.cohesion_score * 100).toFixed(0)}%
                              </span>
                            ) : (
                              <span className="text-text-muted">N/A</span>
                            )}
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
            <div className="mt-8 p-6 bg-white rounded-xl border border-brand-cream-dark">
              <p className="font-semibold text-brand-navy mb-3">How we calculate this:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                <li>Anytime scorer odds converted to true probability (~10% vig removed)</li>
                <li>MID position gets +25% xPts boost (5pts vs 4pts per goal)</li>
                <li>Clean sheet probability adjusted by team cohesion score</li>
                <li>Buzz analysis applies 0-15% haircut based on news sentiment</li>
              </ul>
              <p className="mt-4 text-xs text-text-muted">
                Data source: {data.meta.data_source}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
