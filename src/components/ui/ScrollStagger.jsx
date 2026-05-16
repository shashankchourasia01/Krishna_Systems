import { motion } from 'motion/react'
import { useIntersectionObserver, REVEAL_EASE } from '../../hooks/useIntersectionObserver'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ScrollStagger = ({
  children,
  className = '',
  stagger = 0.08,
  childClassName = '',
}) => {
  const { threshold, rootMargin } = useScrollAnimation()
  const { ref, isVisible } = useIntersectionObserver({ threshold, rootMargin, once: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={child.key ?? i}
              className={childClassName}
              variants={{
                hidden: { opacity: 0, y: 32 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: REVEAL_EASE },
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
