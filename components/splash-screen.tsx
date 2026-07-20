'use client'

import { useEffect, useRef, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      // Fade out the splash screen
      setIsVisible(false)
      
      // Call onComplete after fade animation finishes
      const fadeTimeout = setTimeout(() => {
        onComplete()
      }, 500)

      return () => clearTimeout(fadeTimeout)
    }

    // Play video automatically
    video.play().catch((error) => {
      console.error('[v0] Video playback failed:', error)
      // Fallback: call onComplete immediately if video fails
      handleVideoEnd()
    })

    video.addEventListener('ended', handleVideoEnd)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        playsInline
        muted
        autoPlay
        controls={false}
      >
        <source src="/splash-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
