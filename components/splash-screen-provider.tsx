'use client'

import { useEffect, useState } from 'react'
import { SplashScreen } from './splash-screen'

const SPLASH_SHOWN_KEY = 'splash-screen-shown'
const SAVED_SCROLL_KEY = 'saved-scroll-position'

export function SplashScreenProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSplash, setShowSplash] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Only run on client-side
    setIsHydrated(true)

    // Check if splash screen has already been shown in this session
    const splashShown = sessionStorage.getItem(SPLASH_SHOWN_KEY)
    
    if (!splashShown) {
      // Store current scroll position
      const scrollPosition = window.scrollY || 0
      sessionStorage.setItem(SAVED_SCROLL_KEY, scrollPosition.toString())
      
      // Reset scroll to top before showing splash
      window.scrollTo(0, 0)
      
      // Show splash screen
      setShowSplash(true)
      
      // Mark that splash has been shown in this session
      sessionStorage.setItem(SPLASH_SHOWN_KEY, 'true')
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)

    // Restore scroll position after splash fades out
    setTimeout(() => {
      const savedScroll = sessionStorage.getItem(SAVED_SCROLL_KEY)
      if (savedScroll) {
        const scrollPosition = parseInt(savedScroll, 10)
        window.scrollTo(0, scrollPosition)
        sessionStorage.removeItem(SAVED_SCROLL_KEY)
      }
    }, 50)
  }

  // Prevent hydration mismatch
  if (!isHydrated) {
    return <>{children}</>
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {children}
    </>
  )
}
