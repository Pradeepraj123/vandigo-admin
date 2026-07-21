import clsx from 'clsx';
import Card from './Card';

const THEME = {
  indigo: {
    icon: 'text-amber-600 dark:text-amber-400',
    chip: 'bg-amber-50 dark:bg-amber-900/25 ring-amber-200/70 dark:ring-amber-800/40',
    glow: 'shadow-[0_0_0_6px_rgba(245,158,11,0.08)]',
    bar: 'from-amber-400 to-amber-500',
  },
  green: {
    icon: 'text-green-600 dark:text-green-400',
    chip: 'bg-green-50 dark:bg-green-900/25 ring-green-200/70 dark:ring-green-800/40',
    glow: 'shadow-[0_0_0_6px_rgba(34,197,94,0.08)]',
    bar: 'from-green-400 to-green-500',
  },
  blue: {
    icon: 'text-blue-600 dark:text-blue-400',
    chip: 'bg-blue-50 dark:bg-blue-900/25 ring-blue-200/70 dark:ring-blue-800/40',
    glow: 'shadow-[0_0_0_6px_rgba(59,130,246,0.08)]',
    bar: 'from-blue-400 to-blue-500',
  },
  orange: {
    icon: 'text-orange-600 dark:text-orange-400',
    chip: 'bg-orange-50 dark:bg-orange-900/25 ring-orange-200/70 dark:ring-orange-800/40',
    glow: 'shadow-[0_0_0_6px_rgba(249,115,22,0.08)]',
    bar: 'from-orange-400 to-orange-500',
  },
  red: {
    icon: 'text-red-600 dark:text-red-400',
    chip: 'bg-red-50 dark:bg-red-900/25 ring-red-200/70 dark:ring-red-800/40',
    glow: 'shadow-[0_0_0_6px_rgba(239,68,68,0.08)]',
    bar: 'from-red-400 to-red-500',
  },
  purple: {
    icon: 'text-purple-600 dark:text-purple-400',
    chip: 'bg-purple-50 dark:bg-purple-900/25 ring-purple-200/70 dark:ring-purple-800/40',
    glow: 'shadow-[0_0_0_6px_rgba(168,85,247,0.08)]',
    bar: 'from-purple-400 to-purple-500',
  },
  yellow: {
    icon: 'text-yellow-600 dark:text-yellow-400',
    chip: 'bg-yellow-50 dark:bg-yellow-900/25 ring-yellow-200/70 dark:ring-yellow-800/40',
    glow: 'shadow-[0_0_0_6px_rgba(234,179,8,0.08)]',
    bar: 'from-yellow-400 to-yellow-500',
  },
};

export default function StatCard({ label, value, icon: Icon, color = 'indigo', trend, subtext }) {
  const t = THEME[color] ?? THEME.indigo;

  return (
    <Card className="group">
      <span
        aria-hidden="true"
        className={clsx('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', t.bar)}
      />

      <div className="flex items-start gap-4">
        {Icon && (
          <div
            className={clsx(
              'shrink-0 rounded-xl p-3 ring-1 transition-transform duration-300 ease-out group-hover:scale-105',
              t.chip,
              t.glow
            )}
          >
            <Icon size={22} strokeWidth={2} className={t.icon} />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
          <p className="mt-1 text-2xl font-bold tracking-tight tabular-nums text-gray-900 dark:text-gray-100">
            {value ?? '—'}
          </p>
          {(subtext || trend) && (
            <div className="mt-1 flex items-center gap-1.5">
              {trend && (
                <span
                  className={clsx(
                    'text-xs font-semibold',
                    trend > 0
                      ? 'text-green-600 dark:text-green-400'
                      : trend < 0
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-gray-400'
                  )}
                >
                  {trend > 0 ? '+' : ''}
                  {trend}%
                </span>
              )}
              {subtext && <p className="text-xs text-gray-400 dark:text-gray-500">{subtext}</p>}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
