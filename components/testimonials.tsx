"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Clock } from "lucide-react"
import { StructuredData } from "@/components/structured-data"

const testimonials = [
  {
    quote:
      "I haven't touched a shovel in two winters. They text me a photo every time they clear, and I can relax knowing my sidewalk is always bylaw-compliant. Worth every penny.",
    author: "Sarah M.",
    location: "Red Deer",
    timestamp: "Cleared Dec 15, 2024 at 7:23 AM",
  },
  {
    quote:
      "As a senior, shovelling was getting dangerous. Now I just check my phone in the morning and see the photo that it's done. It's like having a reliable neighbour who never forgets.",
    author: "Robert K.",
    location: "Sylvan Lake",
    timestamp: "Cleared Dec 14, 2024 at 6:45 AM",
  },
  {
    quote:
      "I'm a landlord with three properties. This service keeps me compliant without having to drive across town every time it snows. The flat monthly fee makes budgeting easy.",
    author: "Mike T.",
    location: "Blackfalds",
    timestamp: "Cleared Dec 13, 2024 at 8:12 AM",
  },
]

export function Testimonials() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stronger Snow Removal Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "reviewBody": testimonial.quote,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    }))
  }

  return (
    <section className="bg-slate-50 py-20">
      <StructuredData data={reviewSchema} />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Join 87 Red Deer Homeowners Who Stopped Shoveling
            </h2>
            <p className="text-lg text-slate-600">
              Real results from real customers in your neighbourhood
            </p>
          </div>
          
          {/* Before/After Photos */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden relative">
              <div className="relative aspect-video">
                <Image
                  src="/images/before.png"
                  alt="Before snow removal - snow-covered driveway in Red Deer requiring professional snow clearing service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded font-semibold text-sm">
                  BEFORE
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-xs">
                  <p className="font-medium">Snow-covered driveway</p>
                  <p className="text-white/80">Dec 15, 2024 • 6:15 AM</p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden relative border-2 border-green-500">
              <div className="relative aspect-video">
                <Image
                  src="/images/after.png"
                  alt="After snow removal - fully cleared driveway by Stronger Snow Removal Services in Red Deer, completed in 68 minutes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded font-semibold text-sm">
                  AFTER
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-xs">
                  <p className="font-medium">Fully cleared driveway</p>
                  <p className="text-white/80">Dec 15, 2024 • 7:23 AM</p>
                  <div className="mt-1 flex items-center gap-1 text-green-300">
                    <Clock className="h-3 w-3" />
                    <span>Cleared in 68 minutes</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-blue-600" />
                  <p className="mb-4 italic text-slate-700">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-3">
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      – {testimonial.author}, {testimonial.location}
                    </p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {testimonial.timestamp}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
