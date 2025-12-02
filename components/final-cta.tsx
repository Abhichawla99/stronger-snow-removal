"use client"

import { CTAButton } from "./cta-button"

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Reserve Your Spot Now
          </h2>
          <p className="mb-6 text-xl font-medium text-blue-100">
            Never shovel again. Always be bylaw-safe. One predictable monthly
            fee.
          </p>
          <p className="mb-8 text-lg text-blue-100">
            This winter, your driveway and walkways will be cleared
            automatically, every time it snows. You'll get a text and photo so
            you can relax at work, at home, or while travelling.
          </p>
          <CTAButton spotsRemaining={12} showCountdown={true} />
          <p className="mt-6 text-sm italic text-blue-200">
            Red Deer Snow Route – Local. Insured. Reliable.
          </p>
        </div>
      </div>
    </section>
  )
}
