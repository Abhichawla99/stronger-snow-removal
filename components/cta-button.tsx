"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { STRIPE_PURCHASE_URL_STANDARD } from "@/lib/constants"

interface CTAButtonProps {
  onClick?: () => void
  spotsRemaining?: number
  showCountdown?: boolean
  className?: string
  price?: string
  originalPrice?: string
  stripeUrl?: string
}

export function CTAButton({ onClick, spotsRemaining = 12, showCountdown = false, className = "", price = "$179", originalPrice = "$358", stripeUrl }: CTAButtonProps) {
  const [hoursLeft, setHoursLeft] = useState(48)

  useEffect(() => {
    if (showCountdown) {
      const interval = setInterval(() => {
        setHoursLeft((prev) => (prev > 0 ? prev - 0.1 : 0))
      }, 360000) // Update every 6 minutes
      return () => clearInterval(interval)
    }
  }, [showCountdown])

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      const url = stripeUrl || STRIPE_PURCHASE_URL_STANDARD
      window.open(url, "_blank")
    }
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="text-center">
        <div className="mb-1 flex items-center justify-center gap-2">
          <span className="text-sm text-slate-500 line-through">{originalPrice}/month</span>
          <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">50% OFF</span>
        </div>
        <Button
          onClick={handleClick}
          size="lg"
          className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-transform duration-200 text-lg px-8 py-6 h-auto min-h-[48px] shadow-lg hover:shadow-xl w-full sm:w-auto"
        >
          Get Winter Freedom—{price}/Month
        </Button>
      </div>
      {spotsRemaining > 0 && (
        <p className="text-sm font-semibold text-slate-600">
          Only {spotsRemaining} spots remaining
        </p>
      )}
      {showCountdown && hoursLeft > 0 && (
        <p className="text-xs text-red-600 font-semibold animate-pulse">
          Route closes in {Math.ceil(hoursLeft)} hours
        </p>
      )}
    </div>
  )
}

