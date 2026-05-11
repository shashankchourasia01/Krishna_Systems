const SectionHeading = ({ badge, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      {badge && (
        <span className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading