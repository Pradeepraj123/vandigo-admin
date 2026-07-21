import clsx from 'clsx';

export function Skeleton({ className }) {
  return (
    <div
      className={clsx(
        'animate-pulse rounded-lg bg-gray-200/80 dark:bg-gray-700/60',
        className
      )}
    />
  );
}

export function TableSkeleton({ rows = 6, cols = 5 }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
      <div
        className="grid gap-4 bg-gray-50 px-6 py-3 dark:bg-gray-800"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-3/4" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, r) => (
        <div
          key={r}
          className="grid gap-4 border-t border-gray-100 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {Array.from({ length: cols }).map((_, c) => (
            <Skeleton key={c} className="h-4" style={{ width: `${60 + Math.random() * 30}%` }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_10px_30px_-14px_rgba(15,23,42,0.18)] dark:border-gray-700 dark:bg-gray-800">
      <div className="absolute inset-x-0 top-0 h-1 bg-gray-100 dark:bg-gray-700" aria-hidden="true" />
      <div className="flex items-start gap-4">
        <Skeleton className="h-11 w-11 shrink-0 rounded-xl" />
        <div className="min-w-0 flex-1">
          <Skeleton className="mb-3 h-3.5 w-2/3" />
          <Skeleton className="mb-2 h-7 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  );
}
