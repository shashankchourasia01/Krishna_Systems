export const LogoMark = ({ className = '', size = 44, theme = 'auto' }) => {
  const sharedClass = 'brand-logo-img h-full w-full object-contain'
  const shellClass = `logo-mark-shell inline-flex shrink-0 items-center justify-center ${className}`
  const shellStyle = className ? undefined : { width: size, height: size }

  return (
    <div className={shellClass} style={shellStyle} aria-hidden="true">
      {theme === 'on-dark' ? (
        <img src="/brand/logo-light.png" alt="" width={size} height={size} className={sharedClass} />
      ) : (
        <>
          <img
            src="/brand/logo-dark.png"
            alt=""
            width={size}
            height={size}
            className={`${sharedClass} block dark:hidden`}
          />
          <img
            src="/brand/logo-light.png"
            alt=""
            width={size}
            height={size}
            className={`${sharedClass} hidden dark:block`}
          />
        </>
      )}
    </div>
  )
}

const Logo = ({
  variant = 'default',
  showText = true,
  className = '',
  markClassName = '',
  wordmarkClassName = '',
  size = 'md',
}) => {
  const sizes = {
    sm: { mark: 40 },
    md: { mark: 48 },
    lg: { mark: 56 },
  }

  const s = sizes[size] || sizes.md
  const isDarkSection = variant === 'dark'
  const markTheme = isDarkSection ? 'on-dark' : 'auto'

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoMark size={s.mark} theme={markTheme} className={markClassName} />
      {showText && (
        <span
          className={`brand-wordmark ${isDarkSection ? 'brand-wordmark--on-dark' : ''} ${wordmarkClassName}`}
        >
          <span>Krisha</span>
          <span>Systems</span>
        </span>
      )}
    </div>
  )
}

export default Logo
