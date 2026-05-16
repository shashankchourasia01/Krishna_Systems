import { useState } from 'react'
import Skeleton from './Skeleton'

const ClientLogo = ({ brand, className = '' }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`client-logo group relative flex h-14 w-36 shrink-0 items-center justify-center px-4 sm:h-16 sm:w-40 ${className}`}
    >
      {!loaded && <Skeleton className="absolute inset-2 rounded-lg" aria-hidden="true" />}
      <img
        src={brand.src}
        alt={brand.alt}
        width={120}
        height={40}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`client-logo__img max-h-8 w-auto max-w-[7.5rem] object-contain transition-all duration-300 sm:max-h-9 sm:max-w-[8.5rem] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export default ClientLogo
