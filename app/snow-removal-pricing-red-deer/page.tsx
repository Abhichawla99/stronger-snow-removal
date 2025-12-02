import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, DollarSign } from "lucide-react"
import { STRIPE_PURCHASE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Snow Removal Pricing Red Deer | Transparent Monthly Rates 2024",
  description: "Complete snow removal pricing guide for Red Deer, Alberta. Transparent monthly rates starting at $179/month. No hidden fees, no per-visit charges.",
  keywords: "snow removal pricing Red Deer, snow removal cost Red Deer, snow removal rates, monthly snow removal price",
  openGraph: {
    title: "Snow Removal Pricing Red Deer | Stronger Snow Removal",
    description: "Transparent snow removal pricing in Red Deer. Starting at $179/month.",
    type: "website",
    locale: "en_CA",
  },
}

export default function SnowRemovalPricing() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Snow Removal Pricing in Red Deer, Alberta
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Transparent, flat monthly pricing with no hidden fees or surprises.
          </p>
          <a href={STRIPE_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              View Pricing Plans
            </Button>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Red Deer Snow Removal Pricing 2024</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$179<span className="text-lg text-slate-600">/month</span></div>
                <p className="text-slate-700 mb-4">Most popular choice for Red Deer homes</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Up to 2-car driveway</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Front walkway & steps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Sidewalk clearing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Unlimited visits</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 border-2 border-slate-300 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Corner/Large Driveway</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">$229<span className="text-lg text-slate-600">/month</span></div>
                <p className="text-slate-700 mb-4">For larger properties</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Corner lots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>3+ car driveways</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>All standard features</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What's Included in Your Monthly Price</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Unlimited snow clearing visits (when snowfall ≥ 2cm)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">12-24 hour clearing guarantee</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Photo proof with every clear</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Ice melt application when needed</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Fully insured service</span>
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h3 className="font-bold text-lg mb-2">No Hidden Fees</h3>
            <p className="text-slate-700">
              Your monthly price is all-inclusive. No per-visit charges, no equipment fees, no surprise costs. Whether it snows once or ten times in a month, you pay the same flat rate.
            </p>
          </section>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <a href={STRIPE_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Reserve Your Spot - $179/Month
              </Button>
            </a>
            <p className="text-sm text-slate-600 mt-4">
              Questions about pricing? Call <a href="tel:+15878049266" className="text-blue-600 font-semibold">587-804-9266</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

