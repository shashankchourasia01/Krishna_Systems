import Reveal from './Reveal'

const SectionHeading = ({
  badge,
  title,
  description,
  align = 'left',
  light = false,
  animate = true,
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? 'text-white' : 'section-title'
  const descColor = light ? 'text-slate-300' : 'text-body'
  const badgeStyle = light
    ? 'border border-cyan-300/20 bg-cyan-400/10 text-cyan-300'
    : 'eyebrow'

  const content = (
    <div className={`mb-10 max-w-3xl sm:mb-12 ${alignment}`}>
      {badge && (
        <span className={`mb-4 inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${badgeStyle}`}>
          {badge}
        </span>
      )}
      <h2 className={titleColor}>{title}</h2>
      {description && (
        <p className={`mt-4 text-sm leading-7 sm:text-base ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  )

  return animate ? <Reveal direction="up">{content}</Reveal> : content
}

export default SectionHeading
