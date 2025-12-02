"use client"

import { MapPin, CheckCircle, Snowflake, CreditCard } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: MapPin,
    title: "Enter Your Address and Choose a Plan",
    description:
      "Tell us where you live and select the plan that fits your property. Most homes in Red Deer fit our Standard Plan.",
  },
  {
    number: "2",
    icon: CheckCircle,
    title: "We Confirm Your Spot",
    description:
      "We'll confirm you're on our route and send you your start date. Your subscription begins when the first significant snowfall hits.",
  },
  {
    number: "3",
    icon: Snowflake,
    title: "We Clear Automatically",
    description:
      "Every time it snows 2 cm or more, we automatically show up, clear your driveway, front walkway, front steps, and sidewalk, then text you a photo. You don't need to call, schedule, or think about it.",
  },
  {
    number: "4",
    icon: CreditCard,
    title: "One Flat Monthly Fee",
    description:
      "You pay the same amount every month, regardless of how many times we visit. Cancel any time before the next month with no penalties.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="relative rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      {step.number}
                    </div>
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

