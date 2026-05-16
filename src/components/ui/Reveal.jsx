import { motion } from 'motion/react'
import { useIntersectionObserver, REVEAL_EASE } from '../../hooks/useIntersectionObserver'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const directionOffsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  scale: { y: 24, x: 0, scale: 0.94 },
}

const Reveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const { threshold, rootMargin } = useScrollAnimation()
  const { ref, isVisible } = useIntersectionObserver({ threshold, rootMargin, once: true })

  const base = directionOffsets[direction] || directionOffsets.up
  const hidden = {
    opacity: 0,
    y: base.y || 0,
    x: base.x || 0,
    scale: base.scale ?? 1,
  }
  const visible = { opacity: 1, y: 0, x: 0, scale: 1 }

  return (
    <motion.div
      ref={ref}
      className={`max-w-full ${className}`}
      initial={false}
      animate={isVisible ? visible : hidden}
      transition={{
        duration: 0.65,
        delay: isVisible ? delay : 0,
        ease: REVEAL_EASE,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
