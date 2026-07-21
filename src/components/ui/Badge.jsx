import clsx from 'clsx';

const variants = {
  success:
    'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-900/25 dark:text-green-400 dark:ring-green-400/20 [&>span]:bg-green-500',
  warning:
    'bg-yellow-50 text-yellow-700 ring-yellow-600/20 dark:bg-yellow-900/25 dark:text-yellow-400 dark:ring-yellow-400/20 [&>span]:bg-yellow-500',
  danger:
    'bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/25 dark:text-red-400 dark:ring-red-400/20 [&>span]:bg-red-500',
  info:
    'bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-900/25 dark:text-blue-400 dark:ring-blue-400/20 [&>span]:bg-blue-500',
  default:
    'bg-gray-100 text-gray-700 ring-gray-500/15 dark:bg-gray-700/50 dark:text-gray-300 dark:ring-gray-400/15 [&>span]:bg-gray-500',
  indigo:
    'bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-900/25 dark:text-amber-400 dark:ring-amber-400/20 [&>span]:bg-amber-500',
};

export default function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset',
        variants[variant] ?? variants.default,
        className
      )}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden="true" />
      {children}
    </span>
  );
}
