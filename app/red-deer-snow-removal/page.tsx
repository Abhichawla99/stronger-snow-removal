import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Snowflake, Clock, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Snowfall } from "@/components/snowfall"

export const metadata: Metadata = {
  title: "Red Deer Snow Removal Service | Professional & Reliable | Stronger Snow Removal",
  description: "Professional snow removal service in Red Deer, Alberta. Flat monthly subscription, guaranteed 12-24 hour clearing, photo proof. Serving Red Deer, Sylvan Lake, Blackfalds, and surrounding areas.",
  keywords: "Red Deer snow removal, snow removal Red Deer, driveway snow removal, Red Deer winter service, snow clearing Red Deer",
  openGraph: {
    title: "Red Deer Snow Removal Service | Stronger Snow Removal",
    description: "Professional snow removal service in Red Deer. Flat monthly subscription with guaranteed timing.",
    type: "website",
    locale: "en_CA",
  },
}

export default function RedDeerSnowRemoval() {
  return (
    <div className="min-h-screen bg-white">
      <Snowfall />
      <Header />
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Snow Removal Service in Red Deer, Alberta
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Reliable, insured snow removal for Red Deer homeowners. Never shovel again with our flat monthly subscription service.
          </p>
          <Link href="/#pricing">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Stronger Snow Removal in Red Deer?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <Clock className="h-8 w-8 text-blue-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">12-24 Hour Guarantee</h3>
                  <p className="text-slate-600">Your driveway and sidewalk cleared within 12-24 hours after snow stops, or your month is free.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="h-8 w-8 text-blue-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fully Insured</h3>
                  <p className="text-slate-600">Comprehensive liability insurance protects you and your property.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Snowflake className="h-8 w-8 text-blue-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Automatic Service</h3>
                  <p className="text-slate-600">We automatically clear every time it snows 2cm or more. No calls needed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="h-8 w-8 text-blue-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Photo Proof</h3>
                  <p className="text-slate-600">Receive a text with photo confirmation every time we clear your property.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Red Deer Snow Removal Coverage Areas</h2>
            <p className="text-lg text-slate-700 mb-4">
              We provide comprehensive snow removal services throughout Red Deer and surrounding communities:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
              <li>Downtown Red Deer</li>
              <li>East Red Deer</li>
              <li>West Red Deer</li>
              <li>South Red Deer</li>
              <li>North Red Deer</li>
              <li>Andrews Industrial Area</li>
              <li>All residential neighborhoods</li>
            </ul>
            <p className="text-slate-600">
              We also serve nearby bedroom communities including <Link href="/sylvan-lake-snow-removal" className="text-blue-600 hover:underline">Sylvan Lake</Link>, <Link href="/blackfalds-snow-removal" className="text-blue-600 hover:underline">Blackfalds</Link>, Penhold, Springbrook, and Lacombe.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What's Included in Red Deer Snow Removal Service</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Driveway clearing (up to 2-car standard, larger available)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Front walkway and steps</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Sidewalk along front of property (bylaw compliance)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Unlimited visits when snowfall ≥ 2cm</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Text notification with photo proof</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Ice melt application when needed</span>
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Red Deer Snow Removal Pricing</h2>
            <p className="text-slate-700 mb-4">
              Simple, transparent pricing with no hidden fees:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-lg mb-2">Standard Plan - $179/month</h3>
                <p className="text-slate-600">Perfect for most Red Deer homes with standard driveways.</p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h3 className="font-semibold text-lg mb-2">Corner/Large Driveway - $229/month</h3>
                <p className="text-slate-600">For corner lots or larger driveways in Red Deer.</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              All prices are flat monthly fees. No per-visit charges. Cancel anytime.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Red Deer Bylaw Compliance</h2>
            <p className="text-slate-700 mb-4">
              Red Deer requires property owners to clear sidewalks within 24 hours after snowfall ends. Our service ensures you're always compliant, protecting you from potential fines.
            </p>
            <p className="text-slate-700">
              We understand Red Deer's winter weather patterns and ensure timely clearing even during heavy snowfalls or extreme cold temperatures common in Central Alberta.
            </p>
          </section>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Never Shovel Again in Red Deer?</h2>
            <p className="text-slate-700 mb-6">
              Join 87+ Red Deer homeowners who trust Stronger Snow Removal Services.
            </p>
            <Link href="/#pricing">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Reserve Your Spot - Only 12 Left
              </Button>
            </Link>
            <p className="text-sm text-slate-600 mt-4">
              Call us at <a href="tel:+15878049266" className="text-blue-600 font-semibold">587-804-9266</a> for immediate service
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

