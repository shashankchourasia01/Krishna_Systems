import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ScrollStagger = ({
  children,
  className = '',
  stagger = 0.07,
  childClassName = '',
}) => {
  const ref = useRef(null)
  const scrollDir = useScrollDirection()
  const { isMobile, inViewAmount, inViewMargin, replayOnScroll } = useScrollAnimation()

  const isInView = useInView(ref, {
    amount: inViewAmount,
    margin: inViewMargin,
    once: !replayOnScroll,
  })

  const yOffset = isMobile ? (scrollDir === 'down' ? 36 : -36) : 30

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={child.key ?? i}
              className={childClassName}
              variants={{
                hidden: { opacity: 0, y: yOffset, scale: isMobile ? 0.94 : 1 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}

export default ScrollStagger
