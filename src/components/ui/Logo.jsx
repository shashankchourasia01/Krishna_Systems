export const LogoMark = ({ className = '', size = 44 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="48" height="48" rx="14" fill="url(#ks-logo-bg)" />
    <path d="M14 32V16h4.2l5.8 9.4V16H28v16h-4.2l-5.8-9.4V32H14z" fill="white" />
    <path
      d="M30 16h8.5c3.2 0 5.5 2.1 5.5 5.2 0 2.2-1.2 3.8-3.1 4.6L44 32h-4.8l-2.9-5.4H34V32H30V16zm4.4 7.6h2.8c1.1 0 1.8-.6 1.8-1.5s-.7-1.5-1.8-1.5h-2.8v3z"
      fill="white"
    />
    <defs>
      <linearGradient id="ks-logo-bg" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0f766e" />
        <stop offset="1" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
  </svg>
)

const Logo = ({
  variant = 'default',
  showText = true,
  className = '',
  size = 'md',
}) => {
  const sizes = {
    sm: { mark: 36, title: 'text-sm', tagline: 'text-[10px]' },
    md: { mark: 44, title: 'text-base', tagline: 'text-xs' },
    lg: { mark: 52, title: 'text-lg', tagline: 'text-xs' },
  }

  const s = sizes[size] || sizes.md
  const isDark = variant === 'dark'

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoMark size={s.mark} />
      {showText && (
        <div className="min-w-0">
          <p
            className={`${s.title} font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950 dark:text-slate-50'
            }`}
          >
            Krisha Systems
          </p>
          <p className={`${s.tagline} truncate ${isDark ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
            IT & Services
          </p>
        </div>
      )}
    </div>
  )
}

export default Logo