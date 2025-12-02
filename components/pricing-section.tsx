"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { CTAButton } from "./cta-button"

const standardPlan = {
  name: "Standard Plan",
  price: "$179",
  period: "/month",
  description: "Most homes in Red Deer fit this plan.",
  features: [
    "Up to 2-car driveway",
    "Front walkway and steps",
    "Sidewalk along the front of your property",
    "Unlimited visits each month when snowfall ≥ 2 cm",
    "12–24 hour clear-time guarantee",
    "Text + photo after every clear",
  ],
  perfectFor: "Most single-family homes, standard driveways, non-corner lots.",
}

const cornerPlan = {
  name: "Corner / Large Driveway Plan",
  price: "$229",
  period: "/month",
  features: [
    "Corner lot or larger driveways",
    "Front walkway and steps",
    "Sidewalk along the front of your property",
    "Unlimited visits each month when snowfall ≥ 2 cm",
    "12–24 hour clear-time guarantee",
    "Text + photo after every clear",
  ],
  perfectFor: "Corner lots, 3+ car driveways, larger properties.",
}

export function PricingSection() {
  const [showCornerPlan, setShowCornerPlan] = useState(false)

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mb-8 text-center text-lg text-slate-600">
            One flat monthly fee. No per-visit charges. No surprises.
          </p>
          
          {/* Standard Plan - Always Visible */}
          <Card className="relative mb-6 border-2 border-blue-500 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white">
                50% OFF
              </div>
              <div className="rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                Most Popular
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{standardPlan.name}</CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-400 line-through">$358</span>
                <span className="text-4xl font-bold text-blue-600">{standardPlan.price}</span>
                <span className="text-slate-600">{standardPlan.period}</span>
              </div>
              <CardDescription className="text-base font-medium">
                {standardPlan.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {standardPlan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-slate-600">
                <strong className="text-slate-900">Perfect for:</strong>{" "}
                {standardPlan.perfectFor}
              </p>
            </CardContent>
            <CardFooter>
              <CTAButton className="w-full" spotsRemaining={12} />
            </CardFooter>
          </Card>

          {/* Corner Plan - Expandable */}
          <div className="mb-6">
            <button
              onClick={() => setShowCornerPlan(!showCornerPlan)}
              className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-4 text-left transition-all hover:border-blue-300 hover:bg-slate-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Corner Lot or Large Driveway?
                  </h3>
                  <p className="text-sm text-slate-600">
                    <span className="line-through text-slate-400">$458/month</span>{" "}
                    <span className="text-red-600 font-semibold">50% OFF</span> - $229/month
                  </p>
                </div>
                {showCornerPlan ? (
                  <ChevronUp className="h-5 w-5 text-slate-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-600" />
                )}
              </div>
            </button>

            {showCornerPlan && (
              <Card className="mt-4 border transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{cornerPlan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">50% OFF</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-slate-400 line-through">$458</span>
                    <span className="text-4xl font-bold text-blue-600">{cornerPlan.price}</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {cornerPlan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-medium text-slate-600">
                    <strong className="text-slate-900">Perfect for:</strong>{" "}
                    {cornerPlan.perfectFor}
                  </p>
                </CardContent>
                <CardFooter>
                  <CTAButton className="w-full" spotsRemaining={12} />
                </CardFooter>
              </Card>
            )}
          </div>

          <p className="text-center text-sm text-slate-500">
            *Add-ons available after signup. No long-term contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
