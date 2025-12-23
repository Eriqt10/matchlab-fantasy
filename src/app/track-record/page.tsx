'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Target, Calendar, CheckCircle, XCircle, Loader2, Shield } from 'lucide-react'

// Types matching track_record.json structure
interface CaptainPickResult {
  rank: number
  player: string
  goals: number
  assists: number
  points: number
}

interface CleanSheetResult {
  rank: number
  team: string
  goals_conceded: number
  clean_sheet: boolean
}

interface GameweekData {
  processed_at: string
  captain_picks: {
    picks: CaptainPickResult[]
    goals_scored: number
    top3_scored: boolean
    best_pick_rank: number | null
  }
  clean_sheets: {
    picks: CleanSheetResult[]
    clean_sheets_kept: number
    top3_hit: boolean
    best_pick_rank: number | null
  }
}

interface TrackRecordData {
  meta: {
    last_updated: string
    total_gameweeks: number
    start_gameweek: number
  }
  summary: {
    captain_picks: {
      total_picks: number
      goals_scored: number
      goal_rate: number
      top3_hit_rate: number
      avg_rank_of_scorer: number | null
    }
    clean_sheets: {
      total_picks: number
      clean_sheets_kept: number
      cs_rate: number
      top3_hit_rate: number
    }
  }
  gameweeks: Record<string, GameweekData>
}

function StatCard({ icon: Icon, label, value, subtitle }: { icon: React.ElementType, label: string, value: string, subtitle?: string }) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-primary" />
        </div>
        <span className="text-sm text-text-secondary">{label}</span>
      </div>
      <p className="text-3xl font-bold text-brand-navy">{value}</p>
      {subtitle && <p className="text-sm text-text-secondary mt-1">{subtitle}</p>}
    </div>
  )
}

export default function TrackRecordPage() {
  const [data, setData] = useState<TrackRecordData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try GitHub first, fallback to local
        const githubUrl = 'https://raw.githubusercontent.com/Eriqt10/MatchLabSports/master/reports/track_record.json'
        const localUrl = '/data/track-record.json'

        let response = await fetch(githubUrl, { cache: 'no-store' })

        if (!response.ok) {
          response = await fetch(localUrl)
        }

        if (!response.ok) {
          throw new Error('Failed to load track record')
        }

        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        console.error('Failed to fetch track record:', err)
        setError('Failed to load track record data.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-surface-secondary py-8 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-primary animate-spin" />
        <span className="ml-3 text-text-secondary">Loading track record...</span>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-surface-secondary py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">{error || 'No data available'}</p>
          </div>
        </div>
      </div>
    )
  }

  // Get all gameweeks sorted by number (most recent first)
  const gameweekKeys = Object.keys(data.gameweeks).sort((a, b) => {
    const numA = parseInt(a.replace('gw', ''))
    const numB = parseInt(b.replace('gw', ''))
    return numB - numA
  })

  return (
    <div className="min-h-screen bg-surface-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-brand-navy">Track Record</h1>
          <p className="text-text-secondary text-sm mt-1">
            Full transparency on our predictions. Updated after each gameweek.
          </p>
          <p className="text-xs text-text-muted mt-2">
            Last updated: {new Date(data.meta.last_updated).toLocaleDateString('en-US', {
              month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
            })}
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={Target}
            label="Captain Picks"
            value={data.summary.captain_picks.total_picks.toString()}
            subtitle={`${data.summary.captain_picks.goals_scored} scored`}
          />
          <StatCard
            icon={TrendingUp}
            label="Captain Goal Rate"
            value={`${(data.summary.captain_picks.goal_rate * 100).toFixed(1)}%`}
            subtitle="Anytime scorer hit rate"
          />
          <StatCard
            icon={Shield}
            label="Clean Sheet Picks"
            value={data.summary.clean_sheets.total_picks.toString()}
            subtitle={`${data.summary.clean_sheets.clean_sheets_kept} kept`}
          />
          <StatCard
            icon={CheckCircle}
            label="CS Rate"
            value={`${(data.summary.clean_sheets.cs_rate * 100).toFixed(1)}%`}
            subtitle="Clean sheet hit rate"
          />
        </div>

        {/* Top 3 Performance */}
        <div className="card mb-8">
          <div className="card-header">
            <h2 className="font-semibold text-brand-navy">Top 3 Pick Performance</h2>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-surface-secondary rounded-lg">
                <p className="text-sm text-text-secondary mb-2">Captain Top 3 Hit Rate</p>
                <p className="text-3xl font-bold text-brand-primary">
                  {(data.summary.captain_picks.top3_hit_rate * 100).toFixed(0)}%
                </p>
                <p className="text-xs text-text-muted mt-1">At least one top 3 pick scored</p>
              </div>
              <div className="text-center p-4 bg-surface-secondary rounded-lg">
                <p className="text-sm text-text-secondary mb-2">CS Top 3 Hit Rate</p>
                <p className="text-3xl font-bold text-brand-primary">
                  {(data.summary.clean_sheets.top3_hit_rate * 100).toFixed(0)}%
                </p>
                <p className="text-xs text-text-muted mt-1">At least one top 3 kept CS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gameweek Breakdown */}
        {gameweekKeys.map((gwKey) => {
          const gw = data.gameweeks[gwKey]
          const gwNum = gwKey.replace('gw', '').toUpperCase()

          return (
            <div key={gwKey} className="card mb-6">
              <div className="card-header flex items-center justify-between">
                <h2 className="font-semibold text-brand-navy">GW{gwNum} Results</h2>
                <span className="text-xs text-text-muted">
                  {new Date(gw.processed_at).toLocaleDateString()}
                </span>
              </div>

              <div className="card-body">
                {/* Captain Picks */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-text-secondary mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Captain Picks ({gw.captain_picks.goals_scored} of {gw.captain_picks.picks.length} scored)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Player</th>
                          <th>Goals</th>
                          <th>Assists</th>
                          <th>FPL Pts</th>
                          <th>Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gw.captain_picks.picks.map((pick) => (
                          <tr key={`${gwKey}-cap-${pick.rank}`}>
                            <td className="font-mono text-text-muted">{pick.rank}</td>
                            <td className="font-medium text-brand-navy">{pick.player}</td>
                            <td className="font-mono">{pick.goals}</td>
                            <td className="font-mono">{pick.assists}</td>
                            <td className="font-mono font-semibold">{pick.points}</td>
                            <td>
                              {pick.goals > 0 ? (
                                <span className="inline-flex items-center gap-1 text-green-600">
                                  <CheckCircle className="w-4 h-4" /> Hit
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-text-muted">
                                  <XCircle className="w-4 h-4" /> Miss
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Clean Sheet Picks */}
                <div>
                  <h3 className="text-sm font-medium text-text-secondary mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Clean Sheet Picks ({gw.clean_sheets.clean_sheets_kept} of {gw.clean_sheets.picks.length} kept)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Team</th>
                          <th>Goals Conceded</th>
                          <th>Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gw.clean_sheets.picks.map((pick) => (
                          <tr key={`${gwKey}-cs-${pick.rank}`}>
                            <td className="font-mono text-text-muted">{pick.rank}</td>
                            <td className="font-medium text-brand-navy">{pick.team}</td>
                            <td className="font-mono">{pick.goals_conceded}</td>
                            <td>
                              {pick.clean_sheet ? (
                                <span className="inline-flex items-center gap-1 text-green-600">
                                  <CheckCircle className="w-4 h-4" /> CS
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-text-muted">
                                  <XCircle className="w-4 h-4" /> Conceded
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Transparency Note */}
        <div className="mt-8 p-4 bg-white rounded-lg border border-brand-cream-dark text-sm text-text-secondary">
          <p className="font-medium text-brand-navy mb-2">About Our Track Record</p>
          <ul className="list-disc list-inside space-y-1">
            <li>All predictions logged BEFORE deadline using Goalserve odds data</li>
            <li>Captain "Hit" = player scored at least one goal</li>
            <li>Clean Sheet "Hit" = team kept a clean sheet</li>
            <li>No cherry-picking: every prediction we publish is tracked here</li>
            <li>Tracking started GW{data.meta.start_gameweek} ({data.meta.total_gameweeks} gameweek{data.meta.total_gameweeks !== 1 ? 's' : ''} tracked)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
