const clientStyles = {
  TCS: { bg: '#0f4c81', text: 'TCS', sub: 'Tata Consultancy' },
  Infosys: { bg: '#007cc3', text: 'Infosys', sub: 'Consulting' },
  PERSISTENT: { bg: '#e31837', text: 'Persistent', sub: 'Systems' },
  Oracle: { bg: '#c74634', text: 'Oracle', sub: 'Cloud' },
  Accenture: { bg: '#a100ff', text: 'Accenture', sub: 'Technology' },
}

const ClientLogo = ({ name, className = '' }) => {
  const style = clientStyles[name] || { bg: '#334155', text: name, sub: 'Partner' }

  return (
    <div
      className={`group flex h-full min-h-[72px] flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white px-3 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md dark:border-slate-700/80 dark:bg-[#141f33] dark:hover:border-sky-500/40 sm:min-h-[80px] sm:px-4 ${className}`}
      title={style.sub}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl text-[10px] font-extrabold tracking-tight text-white sm:h-10 sm:w-10 sm:text-xs"
        style={{ backgroundColor: style.bg }}
        aria-hidden="true"
      >
        {style.text.slice(0, 3).toUpperCase()}
      </div>
      <span className="text-center text-[11px] font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 sm:text-xs">
        {style.text}
      </span>
    </div>
  )
}

export default ClientLogo
