import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Car } from "lucide-react"
import { STRIPE_PURCHASE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Driveway Snow Removal Red Deer | Professional Driveway Clearing",
  description: "Professional driveway snow removal service in Red Deer, Alberta. Clear your driveway automatically every time it snows. Starting at $179/month.",
  keywords: "driveway snow removal Red Deer, driveway snow clearing, clear driveway Red Deer, driveway plowing",
  openGraph: {
    title: "Driveway Snow Removal Red Deer | Stronger Snow Removal",
    description: "Professional driveway snow removal service in Red Deer.",
    type: "website",
    locale: "en_CA",
  },
}

export default function DrivewaySnowRemoval() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Driveway Snow Removal Service in Red Deer
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Never shovel your driveway again. Automatic clearing every time it snows.
          </p>
          <a href={STRIPE_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Get Driveway Service
            </Button>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Professional Driveway Snow Removal</h2>
            <p className="text-lg text-slate-700 mb-6">
              Your driveway is one of the most important areas to keep clear during Red Deer winters. Whether you need to get to work, pick up groceries, or have visitors, a clear driveway is essential for daily life.
            </p>
            <p className="text-lg text-slate-700">
              Our driveway snow removal service ensures your driveway is always accessible, automatically cleared every time it snows 2cm or more.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Driveway Sizes We Handle</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-500">
                <h3 className="font-bold text-lg mb-2">Standard Driveway</h3>
                <p className="text-slate-700 mb-4">Up to 2-car driveways</p>
                <div className="text-2xl font-bold text-blue-600 mb-2">$179/month</div>
                <p className="text-sm text-slate-600">Perfect for most Red Deer homes</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-300">
                <h3 className="font-bold text-lg mb-2">Large Driveway</h3>
                <p className="text-slate-700 mb-4">3+ car driveways or corner lots</p>
                <div className="text-2xl font-bold text-slate-900 mb-2">$229/month</div>
                <p className="text-sm text-slate-600">For larger properties</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Driveway Clearing Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Full driveway width clearing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Edge-to-edge clearing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">No damage to driveways or landscaping</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Ice melt application when needed</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">12-24 hour guarantee</span>
              </li>
            </ul>
          </section>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Never Shovel Your Driveway Again</h2>
            <a href={STRIPE_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Get Driveway Service - $179/Month
              </Button>
            </a>
            <p className="text-sm text-slate-600 mt-4">
              Call <a href="tel:+15878049266" className="text-blue-600 font-semibold">587-804-9266</a> or <Link href="/red-deer-snow-removal" className="text-blue-600 hover:underline">view full service details</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

