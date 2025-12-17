import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format percentage with optional decimal places
 */
export function formatPercent(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`
}

/**
 * Format odds to 2 decimal places
 */
export function formatOdds(odds: number): string {
  return odds.toFixed(2)
}

/**
 * Get confidence tier color class
 */
export function getConfidenceColor(confidence: string): string {
  const colors: Record<string, string> = {
    ELITE: 'text-green-600',
    HIGH: 'text-blue-600',
    MEDIUM: 'text-amber-600',
    LOW: 'text-slate-500',
  }
  return colors[confidence] || colors.LOW
}

/**
 * Get buzz status color class
 */
export function getBuzzColor(status: string): string {
  const colors: Record<string, string> = {
    POSITIVE: 'text-green-600 bg-green-100',
    NEUTRAL: 'text-slate-700 bg-slate-100',
    CAUTION: 'text-amber-800 bg-amber-100',
    'RED FLAG': 'text-red-800 bg-red-100',
  }
  return colors[status] || colors.NEUTRAL
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Calculate expected points from probability
 */
export function calculateExpectedPoints(
  probability: number,
  position: 'FWD' | 'MID' | 'DEF' | 'GK'
): number {
  const pointsPerGoal: Record<string, number> = {
    FWD: 4,
    MID: 5,
    DEF: 6,
    GK: 6,
  }
  return probability * (pointsPerGoal[position] || 4)
}
