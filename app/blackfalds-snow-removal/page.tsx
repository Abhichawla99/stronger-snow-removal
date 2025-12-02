import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Blackfalds Snow Removal Service | Professional & Reliable | Stronger Snow Removal",
  description: "Professional snow removal service in Blackfalds, Alberta. Reliable, insured snow clearing for Blackfalds homeowners. Flat monthly subscription.",
  keywords: "Blackfalds snow removal, snow removal Blackfalds, driveway snow removal Blackfalds",
  openGraph: {
    title: "Blackfalds Snow Removal Service | Stronger Snow Removal",
    description: "Professional snow removal service in Blackfalds. Flat monthly subscription with guaranteed timing.",
    type: "website",
    locale: "en_CA",
  },
}

export default function BlackfaldsSnowRemoval() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Snow Removal Service in Blackfalds, Alberta
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Reliable snow removal for Blackfalds homeowners. Never shovel again.
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
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Blackfalds Snow Removal Coverage</h2>
            </div>
            <p className="text-lg text-slate-700 mb-4">
              We serve all areas of Blackfalds, Alberta, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
              <li>All residential neighborhoods in Blackfalds</li>
              <li>New developments and established areas</li>
              <li>Corner lots and standard properties</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Blackfalds Snow Removal Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Automatic clearing when snowfall ≥ 2cm</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">12-24 hour guarantee or month free</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Photo proof with every clear</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Fully insured and bonded</span>
              </li>
            </ul>
          </section>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Blackfalds Snow Removal?</h2>
            <Link href="/#pricing">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Reserve Your Spot
              </Button>
            </Link>
            <p className="text-sm text-slate-600 mt-4">
              Call <a href="tel:+15878049266" className="text-blue-600 font-semibold">587-804-9266</a> or <Link href="/red-deer-snow-removal" className="text-blue-600 hover:underline">view our main service page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

