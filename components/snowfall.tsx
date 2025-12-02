"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: number
  animationDuration: number
  animationDelay: number
  size: number
  opacity: number
  startY: number
}

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    // Generate 80 snowflakes for better coverage, starting instantly
    const flakes: Snowflake[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      animationDuration: 8 + Math.random() * 12, // 8-20 seconds for variety
      animationDelay: 0, // No delay - start instantly
      size: 4 + Math.random() * 6, // 4-10px
      opacity: 0.4 + Math.random() * 0.4, // 0.4-0.8 opacity
      startY: Math.random() * -100, // Start at random positions above viewport for instant visibility
    }))

    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white select-none"
          style={{
            left: `${flake.left}%`,
            top: `${flake.startY}%`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `snowfall ${flake.animationDuration}s linear 0s infinite`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
