import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Snow Removal Service Areas | Red Deer, Sylvan Lake, Blackfalds & More",
  description: "Stronger Snow Removal Services covers Red Deer, Sylvan Lake, Blackfalds, Penhold, Springbrook, and Lacombe. Check if we service your area.",
  keywords: "snow removal Red Deer, snow removal Sylvan Lake, snow removal Blackfalds, snow removal Penhold, snow removal Springbrook, snow removal Lacombe, Red Deer area snow removal",
}

const serviceAreas = [
  {
    city: "Red Deer",
    description: "Full coverage throughout Red Deer, including all residential neighborhoods. We understand Red Deer's snow removal bylaws and ensure compliance.",
  },
  {
    city: "Sylvan Lake",
    description: "Serving Sylvan Lake homeowners with reliable snow removal service. We know the area's unique winter challenges.",
  },
  {
    city: "Blackfalds",
    description: "Comprehensive snow removal service for Blackfalds residents. Fast, reliable, and guaranteed.",
  },
  {
    city: "Penhold",
    description: "Professional snow removal in Penhold. We keep your driveways and walkways clear all winter.",
  },
  {
    city: "Springbrook",
    description: "Trusted snow removal service for Springbrook homeowners. Local, reliable, and insured.",
  },
  {
    city: "Lacombe",
    description: "Full-service snow removal in Lacombe. We're your neighbors, committed to keeping you safe and compliant.",
  },
]

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Snow Removal Service Areas
          </h1>
          <p className="mb-12 text-xl text-slate-600">
            We proudly serve Red Deer and surrounding bedroom communities
          </p>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <CardTitle>{area.city}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-lg bg-slate-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Not Sure If We Cover Your Area?
            </h2>
            <p className="mb-6 text-slate-600">
              Enter your address during signup to confirm coverage. We're expanding our routes to serve more Red Deer area communities.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                  Check Availability
                </Button>
              </Link>
              <a href="tel:+15878049266">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Call: 587-804-9266
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-12 rounded-lg border-2 border-blue-500 bg-blue-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Why Choose Stronger Snow Removal Services?
            </h2>
            <ul className="mb-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Local Red Deer area business with deep community roots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Fully insured and licensed for your protection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>12-24 hour clear-time guarantee or your month is free</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Photo proof sent via text after every clear</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Flat monthly fee—no per-visit surprises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>No long-term contracts, cancel anytime</span>
              </li>
            </ul>
            <Link href="/">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

