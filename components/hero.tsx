"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { STRIPE_PURCHASE_URL } from "@/lib/constants"

export function Hero() {
  const handlePurchase = () => {
    window.open(STRIPE_PURCHASE_URL, "_blank")
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container relative mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Sleep In While We Clear Your Snow—100% Guaranteed
          </h1>
          <p className="mb-8 text-xl font-medium text-blue-100 sm:text-2xl">
            A flat monthly subscription. We clear your driveway and walkways
            every time it snows. Guaranteed timing. Photo proof. No contracts.
          </p>
          
          {/* Pricing Above Fold */}
          <div className="mb-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-6 inline-block">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">50% OFF</span>
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-1">
              <span className="text-2xl font-bold text-white/60 line-through">$358</span>
              <span className="text-5xl font-bold text-white">$179</span>
              <span className="text-xl text-blue-100">/month</span>
            </div>
            <p className="text-sm text-blue-200">One flat fee • Unlimited clears • Cancel anytime</p>
          </div>

          {/* Single CTA with Urgency */}
          <div className="mb-6">
            <Button
              onClick={handlePurchase}
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 transition-transform duration-200 text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl min-h-[48px] w-full sm:w-auto"
            >
              Reserve Your Spot—Only 12 Left
            </Button>
          </div>
          <p className="text-sm text-blue-200 font-semibold animate-pulse">
            Route closes in 48 hours
          </p>
        </div>
      </div>
    </section>
  )
}
