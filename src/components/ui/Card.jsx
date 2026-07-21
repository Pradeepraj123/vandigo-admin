import clsx from 'clsx';

export default function Card({ children, className, padding = true }) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-2xl',
        'border border-gray-200/80 dark:border-gray-700/60',
        'bg-white dark:bg-gray-800',
        'shadow-[0_1px_2px_rgba(15,23,42,0.06),0_10px_30px_-14px_rgba(15,23,42,0.18)]',
        'dark:shadow-[0_1px_2px_rgba(0,0,0,0.25),0_10px_30px_-14px_rgba(0,0,0,0.55)]',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(15,23,42,0.08),0_18px_40px_-14px_rgba(15,23,42,0.24)]',
        'dark:hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_18px_40px_-14px_rgba(0,0,0,0.6)]',
        padding && 'p-6',
        className
      )}
    >
      {children}
    </div>
  );
}
