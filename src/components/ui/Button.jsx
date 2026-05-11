const Button = ({
  children,
  href = '#',
  variant = 'primary',
  className = '',
  onClick,
}) => {
  const styles =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'dark'
      ? 'btn-dark'
      : 'btn-secondary'

  return (
    <a href={href} className={`${styles} ${className}`} onClick={onClick}>
      {children}
    </a>
  )
}

export default Button