const Skeleton = ({ className = '' }) => (
  <div
    className={`animate-pulse rounded-lg bg-slate-200/80 dark:bg-slate-700/60 ${className}`}
    aria-hidden="true"
  />
)

export default Skeleton
