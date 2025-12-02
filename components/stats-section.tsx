"use client"

import { useState, useEffect, useRef } from "react"
import { Snowflake, Clock, Shield, Users } from "lucide-react"

const stats = [
  {
    icon: Snowflake,
    value: "2cm",
    label: "Snowfall trigger",
    description: "We clear automatically",
  },
  {
    icon: Clock,
    value: "12-24",
    label: "Hours guarantee",
    description: "Or your month is free",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Insured & protected",
    description: "Full liability coverage",
  },
  {
    icon: Users,
    value: "40",
    label: "Homes per route",
    description: "Limited for reliability",
  },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                <div className="mb-1 text-lg font-semibold">{stat.label}</div>
                <div className="text-sm text-blue-100">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

