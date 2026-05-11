const SectionHeading = ({ badge, title, description, align = 'left', light = false }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-slate-950'
  const descColor = light ? 'text-slate-300' : 'text-slate-600'
  const badgeStyle = light
    ? 'border border-cyan-300/20 bg-cyan-400/10 text-cyan-300'
    : 'border border-teal-200 bg-teal-50 text-teal-700'

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      {badge && (
        <span className={`mb-4 inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${badgeStyle}`}>
          {badge}
        </span>
      )}
      <h2 className={`section-title ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-sm leading-7 sm:text-base ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading