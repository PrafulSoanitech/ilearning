import { useState, useEffect } from 'react'

export const useScroll = (): boolean => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = (): void => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrolled
}

export default useScroll
