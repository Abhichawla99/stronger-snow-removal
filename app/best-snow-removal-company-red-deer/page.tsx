import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star, Award } from "lucide-react"
import { STRIPE_PURCHASE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Best Snow Removal Company Red Deer | Top Rated Service 2024",
  description: "Stronger Snow Removal Services is the best snow removal company in Red Deer, Alberta. Top-rated, reliable, insured service with 87+ satisfied customers.",
  keywords: "best snow removal company Red Deer, top snow removal Red Deer, rated snow removal service, best snow clearing Red Deer",
  openGraph: {
    title: "Best Snow Removal Company Red Deer | Stronger Snow Removal",
    description: "Top-rated snow removal company in Red Deer with 87+ satisfied customers.",
    type: "website",
    locale: "en_CA",
  },
}

export default function BestSnowRemovalCompany() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Best Snow Removal Company in Red Deer, Alberta
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Why Stronger Snow Removal Services is Red Deer's top choice for reliable snow clearing.
          </p>
          <a href={STRIPE_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Join 87+ Satisfied Customers
            </Button>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why We're Red Deer's Best Snow Removal Company</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                  <h3 className="font-bold text-lg">87+ Satisfied Customers</h3>
                </div>
                <p className="text-slate-700">Join dozens of Red Deer homeowners who trust us with their snow removal needs.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="h-6 w-6 text-green-500" />
                  <h3 className="font-bold text-lg">100% Guarantee</h3>
                </div>
                <p className="text-slate-700">12-24 hour clearing guarantee or your month is free.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="h-6 w-6 text-green-500" />
                  <h3 className="font-bold text-lg">Fully Insured</h3>
                </div>
                <p className="text-slate-700">Comprehensive liability insurance protects you and your property.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="h-6 w-6 text-green-500" />
                  <h3 className="font-bold text-lg">Local & Reliable</h3>
                </div>
                <p className="text-slate-700">Red Deer-based team that understands local weather and bylaws.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Route-Limited Service</h3>
                  <p className="text-slate-600">We cap our route at 40 homes to ensure we can always deliver on our promise. Quality over quantity.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Photo Proof Every Time</h3>
                  <p className="text-slate-600">You receive a text with photo confirmation after every clear. No guessing if it was done.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">No Contracts</h3>
                  <p className="text-slate-600">Month-to-month service. Cancel anytime before the next billing cycle with no penalties.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Predictable Pricing</h3>
                  <p className="text-slate-600">One flat monthly fee. No per-visit surprises, no hidden costs.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-slate-700 italic mb-2">"I haven't touched a shovel in two winters. They text me a photo every time they clear, and I can relax knowing my sidewalk is always bylaw-compliant. Worth every penny."</p>
                <p className="text-sm font-semibold text-slate-900">- Sarah M., Red Deer</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-slate-700 italic mb-2">"As a senior, shovelling was getting dangerous. Now I just check my phone in the morning and see the photo that it's done. It's like having a reliable neighbour who never forgets."</p>
                <p className="text-sm font-semibold text-slate-900">- Robert K., Sylvan Lake</p>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Experience Red Deer's Best Snow Removal Service</h2>
            <a href={STRIPE_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started Today
              </Button>
            </a>
            <p className="text-sm text-slate-600 mt-4">
              Call <a href="tel:+15878049266" className="text-blue-600 font-semibold">587-804-9266</a> or <Link href="/red-deer-snow-removal" className="text-blue-600 hover:underline">learn more about our service</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

