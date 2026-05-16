import { useEffect, useRef, useState } from 'react'

export const REVEAL_EASE = [0.22, 1, 0.36, 1]

const hasIntersectionObserver =
  typeof window !== 'undefined' && typeof IntersectionObserver !== 'undefined'

/**
 * Native Intersection Observer — fires once, no re-trigger on scroll up.
 */
export const useIntersectionObserver = (
  options = {}
) => {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -8% 0px',
    once = true,
  } = options

  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(!hasIntersectionObserver)

  useEffect(() => {
    if (!hasIntersectionObserver) return undefined

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        if (once) observer.disconnect()
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}

export default useIntersectionObserver
