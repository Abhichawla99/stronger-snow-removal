"use client"

import { Shield, Users, Home, FileCheck, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const trustPoints = [
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "We carry comprehensive liability insurance. If something goes wrong, you're protected.",
  },
  {
    icon: Users,
    title: "Trained, Vetted Crews",
    description:
      "Our team members are background-checked and trained. We're not random gig workers. We're local people who take pride in doing the job right.",
  },
  {
    icon: Home,
    title: "Property Respect",
    description:
      "We know how to clear snow without tearing up your lawn or damaging your property. We've been doing this in Red Deer for years.",
  },
  {
    icon: FileCheck,
    title: "Bylaw Compliance",
    description:
      "We understand Red Deer's snow removal bylaws. Your sidewalk will be cleared within the required timeframe, every time.",
  },
  {
    icon: MapPin,
    title: "Local Roots",
    description:
      "We're a Red Deer business. When you call, you're talking to someone who understands our winters, our neighbourhoods, and our community.",
  },
]

export function TrustSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trust & Safety
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-3">
                      <Icon className="h-8 w-8 text-blue-600" />
                      <CardTitle className="text-xl">{point.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{point.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

