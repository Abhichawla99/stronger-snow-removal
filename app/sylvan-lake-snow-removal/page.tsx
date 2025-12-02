import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, MapPin } from "lucide-react"
import { STRIPE_PURCHASE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Sylvan Lake Snow Removal Service | Professional & Reliable | Stronger Snow Removal",
  description: "Professional snow removal service in Sylvan Lake, Alberta. Serving Sylvan Lake homeowners with reliable, insured snow clearing. Flat monthly subscription, guaranteed timing.",
  keywords: "Sylvan Lake snow removal, snow removal Sylvan Lake, driveway snow removal Sylvan Lake, winter service Sylvan Lake",
  openGraph: {
    title: "Sylvan Lake Snow Removal Service | Stronger Snow Removal",
    description: "Professional snow removal service in Sylvan Lake. Flat monthly subscription with guaranteed timing.",
    type: "website",
    locale: "en_CA",
  },
}

export default function SylvanLakeSnowRemoval() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Snow Removal Service in Sylvan Lake, Alberta
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Reliable snow removal for Sylvan Lake homeowners. Never worry about shoveling again.
          </p>
          <a href={STRIPE_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Get Started Today
            </Button>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Sylvan Lake Snow Removal Coverage</h2>
            </div>
            <p className="text-lg text-slate-700 mb-4">
              We proudly serve all areas of Sylvan Lake, Alberta, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
              <li>Downtown Sylvan Lake</li>
              <li>Lakeside properties</li>
              <li>Residential neighborhoods</li>
              <li>All residential properties throughout Sylvan Lake</li>
            </ul>
            <p className="text-slate-600">
              As a bedroom community of Red Deer, Sylvan Lake experiences similar winter weather patterns. Our service ensures your property is cleared promptly, even during heavy lake-effect snowfalls.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Sylvan Lake Homeowners Choose Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Local Knowledge</h3>
                  <p className="text-slate-600">We understand Sylvan Lake's unique weather patterns and property layouts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Reliable Service</h3>
                  <p className="text-slate-600">12-24 hour guarantee ensures your property is always cleared on time.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Photo Proof</h3>
                  <p className="text-slate-600">Receive confirmation photos every time we clear your Sylvan Lake property.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Sylvan Lake Snow Removal Pricing</h2>
            <p className="text-slate-700 mb-4">
              Same transparent pricing as our Red Deer service:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Standard Plan: $179/month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>Corner/Large Driveway: $229/month</span>
              </li>
            </ul>
          </section>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Sylvan Lake Snow Removal Service?</h2>
            <a href={STRIPE_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Reserve Your Spot
              </Button>
            </a>
            <p className="text-sm text-slate-600 mt-4">
              Call <a href="tel:+15878049266" className="text-blue-600 font-semibold">587-804-9266</a> or <Link href="/red-deer-snow-removal" className="text-blue-600 hover:underline">view our main Red Deer service page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

