"use client"

import { Zap, Shield, Calendar } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Automatic",
    description: "We show up every time it snows 2 cm or more",
  },
  {
    icon: Shield,
    title: "Guaranteed",
    description: "Cleared within 12–24 hours or your month is free",
  },
  {
    icon: Calendar,
    title: "Predictable",
    description: "One flat monthly fee, no surprises",
  },
]

export function SolutionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Snow Removal That Works Like a Utility
          </h2>
          <p className="mb-6 text-lg text-slate-700">
            You don't think about your internet bill. You don't think about your
            electricity. You shouldn't have to think about snow removal, either.
          </p>
          <p className="mb-8 text-lg text-slate-700">
            <strong className="text-slate-900">Red Deer Snow Route</strong> is a
            simple subscription service. One flat monthly fee. Unlimited clears
            every time it snows 2 cm or more. We show up automatically, clear
            your driveway and walkways, and text you a photo when we're done.
          </p>
          <p className="mb-8 text-lg text-slate-700">
            You pay the same amount every month, whether it snows once or ten
            times. No surprises. No contracts. Cancel any time before the next
            month.
          </p>
          <div className="mb-8 rounded-lg border-2 border-blue-500 bg-blue-50 p-6">
            <p className="text-xl font-bold text-blue-900">
              Your driveway and sidewalk are cleared within 12–24 hours after
              the snow stops, or your month is free.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="rounded-lg border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Icon className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

