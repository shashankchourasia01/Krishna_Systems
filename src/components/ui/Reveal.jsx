import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const directionOffsets = {
  up: { y: 44, x: 0 },
  down: { y: -44, x: 0 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  scale: { y: 24, x: 0, scale: 0.92 },
}

const Reveal = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const ref = useRef(null)
  const scrollDir = useScrollDirection()
  const { isMobile, inViewAmount, inViewMargin, replayOnScroll } = useScrollAnimation()

  const isInView = useInView(ref, {
    amount: inViewAmount,
    margin: inViewMargin,
    once: !replayOnScroll,
  })

  const base = directionOffsets[direction] || directionOffsets.up

  const hidden = isMobile
    ? {
        opacity: 0,
        y: scrollDir === 'down' ? 36 : -36,
        x: 0,
        scale: direction === 'scale' ? 0.96 : 1,
      }
    : {
        opacity: 0,
        y: base.y || 0,
        x: base.x || 0,
        scale: base.scale || 1,
      }

  const visible = { opacity: 1, y: 0, x: 0, scale: 1 }

  return (
    <motion.div
      ref={ref}
      className={`max-w-full ${className}`}
      initial={false}
      animate={isInView ? visible : hidden}
      transition={{
        duration: isMobile ? 0.5 : 0.65,
        delay: isInView ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
