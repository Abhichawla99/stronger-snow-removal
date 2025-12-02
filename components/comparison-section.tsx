"use client"

import { Clock, Shield, Camera, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const diyComparison = [
  {
    icon: Clock,
    title: "Time",
    description: "Save 30–60 minutes per snowfall. That's 10–20 hours per winter you get back.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "No risk of back injury, heart strain, or falls on ice.",
  },
]

const cashDealComparison = [
  {
    icon: Shield,
    title: "Reliability",
    description: "They might not show up. We're scheduled and guaranteed.",
  },
  {
    icon: Camera,
    title: "Proof",
    description: "You get a text and photo every time. No guessing if it was done.",
  },
]

export function ComparisonSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why This Beats Doing It Yourself
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Compared to DIY:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {diyComparison.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex gap-3">
                        <Icon className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {item.title}:
                          </h3>
                          <p className="text-sm text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Compared to One-Off Cash Deals:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cashDealComparison.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex gap-3">
                        <Icon className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {item.title}:
                          </h3>
                          <p className="text-sm text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 rounded-lg border-2 border-blue-500 bg-blue-50 p-6 text-center">
            <p className="text-lg font-semibold text-blue-900">
              We're not a gig app. We're a local Red Deer team with real people
              who show up, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
