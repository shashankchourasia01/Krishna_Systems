import { useEffect, useRef, useState } from 'react'

export const useScrollDirection = () => {
  const [direction, setDirection] = useState('down')
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      if (Math.abs(y - lastY.current) < 6) return
      setDirection(y > lastY.current ? 'down' : 'up')
      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return direction
}

export default useScrollDirection
