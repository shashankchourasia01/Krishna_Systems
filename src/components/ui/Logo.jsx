import { KS_LOGO_PATHS } from './logoPaths'

export const LogoMark = ({ className = '', size = 44, gradientId = 'ks-logo-bg' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="48" height="48" rx="14" fill={`url(#${gradientId})`} />
    <path d={KS_LOGO_PATHS.k} fill="white" />
    <path d={KS_LOGO_PATHS.s} fill="white" />
    <defs>
      <linearGradient id={gradientId} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
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
  const gradientId = `ks-logo-bg-${size}`

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <div className="logo-mark-shell shrink-0">
        <LogoMark size={s.mark} gradientId={gradientId} />
      </div>
      {showText && (
        <div className="min-w-0">
          <p
            className={`${s.title} font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950 dark:text-slate-50'
            }`}
          >
            KS
          </p>
          <p
            className={`${s.tagline} truncate lowercase tracking-wide ${
              isDark ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            krishasystems
          </p>
        </div>
      )}
    </div>
  )
}

export default Logo
