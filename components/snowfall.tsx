"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: number
  animationDuration: number
  animationDelay: number
  size: number
  opacity: number
}

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    // Generate 50 snowflakes
    const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      animationDuration: 10 + Math.random() * 20, // 10-30 seconds
      animationDelay: Math.random() * 5, // 0-5 seconds delay
      size: 4 + Math.random() * 6, // 4-10px
      opacity: 0.3 + Math.random() * 0.5, // 0.3-0.8 opacity
    }))

    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 text-white select-none"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `snowfall ${flake.animationDuration}s linear ${flake.animationDelay}s infinite`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
