import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Building2 } from "lucide-react"
import { STRIPE_PURCHASE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Commercial Snow Removal Red Deer | Business Snow Clearing Services",
  description: "Commercial snow removal services in Red Deer for businesses, offices, and commercial properties. Reliable, insured commercial snow clearing.",
  keywords: "commercial snow removal Red Deer, business snow removal, office snow clearing Red Deer, commercial property snow removal",
  openGraph: {
    title: "Commercial Snow Removal Red Deer | Stronger Snow Removal",
    description: "Professional commercial snow removal services in Red Deer for businesses.",
    type: "website",
    locale: "en_CA",
  },
}

export default function CommercialSnowRemoval() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Commercial Snow Removal Services in Red Deer
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Keep your business accessible all winter with professional commercial snow removal.
          </p>
          <a href={STRIPE_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Get Commercial Quote
            </Button>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Commercial Snow Removal Services</h2>
            <p className="text-lg text-slate-700 mb-6">
              While we primarily focus on residential snow removal, we understand that businesses need reliable snow clearing too. Our commercial services ensure your business stays accessible to customers and employees throughout the winter.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-slate-700">
                <strong>Note:</strong> Our current subscription service is optimized for residential properties. For commercial properties, parking lots, or large-scale commercial snow removal needs, please contact us directly at <a href="tel:+15878049266" className="text-blue-600 font-semibold">587-804-9266</a> for a custom quote.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Businesses Choose Professional Snow Removal</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Ensure customer and employee safety</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Maintain business accessibility</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Comply with Red Deer commercial property bylaws</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Reduce liability risks</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Professional, reliable service</span>
              </li>
            </ul>
          </section>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Need Commercial Snow Removal in Red Deer?</h2>
            <p className="text-slate-700 mb-6">
              Contact us for a custom commercial quote tailored to your business needs.
            </p>
            <a href="tel:+15878049266">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Call 587-804-9266
              </Button>
            </a>
            <p className="text-sm text-slate-600 mt-4">
              Or <Link href="/" className="text-blue-600 hover:underline">view our residential snow removal services</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

