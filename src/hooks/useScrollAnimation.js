import { useIsMobile } from './useIsMobile'

export const useScrollAnimation = () => {
  const isMobile = useIsMobile()

  return {
    isMobile,
    viewport: {
      once: !isMobile,
      amount: isMobile ? 0.12 : 0.18,
      margin: isMobile ? '-30px 0px -30px 0px' : '0px',
    },
    inViewAmount: isMobile ? 0.12 : 0.18,
    inViewMargin: isMobile ? '-30px 0px -30px 0px' : '0px 0px -50px 0px',
    replayOnScroll: isMobile,
  }
}

export default useScrollAnimation
