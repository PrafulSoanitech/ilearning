import { useState, useEffect } from 'react'

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth)

  const handleResize = () => {
    setWindowWidth(window?.innerWidth)
  }

  useEffect(() => {
    // Attach the event listener
    window?.addEventListener('resize', handleResize)

    // Clean up the event listener on unmount
    return () => {
      window?.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array means this effect runs only on mount and unmount

  return windowWidth
}

export default useWindowWidth
