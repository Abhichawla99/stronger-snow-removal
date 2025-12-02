import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Snow Removal Red Deer | Home Snow Clearing Service",
  description: "Professional residential snow removal service in Red Deer for homeowners. Flat monthly subscription, automatic clearing, photo proof. Perfect for busy families and seniors.",
  keywords: "residential snow removal Red Deer, home snow removal, residential snow clearing, homeowner snow removal",
  openGraph: {
    title: "Residential Snow Removal Red Deer | Stronger Snow Removal",
    description: "Professional residential snow removal service in Red Deer for homeowners.",
    type: "website",
    locale: "en_CA",
  },
}

export default function ResidentialSnowRemoval() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Home className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Residential Snow Removal Service in Red Deer
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Perfect for busy homeowners, seniors, and families who want reliable snow removal.
          </p>
          <Link href="/#pricing">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Residential Snow Removal for Red Deer Homeowners</h2>
            <p className="text-lg text-slate-700 mb-6">
              Our residential snow removal service is designed specifically for homeowners in Red Deer and surrounding areas. Whether you're a busy professional, a senior who shouldn't be shoveling, a parent with young children, or a landlord managing multiple properties, we've got you covered.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Perfect For:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Busy Professionals</h3>
                <p className="text-slate-700">No more early morning shoveling before work. Sleep in while we handle it.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Seniors</h3>
                <p className="text-slate-700">Eliminate the risk of injury from shoveling heavy snow.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Families</h3>
                <p className="text-slate-700">Keep your property safe for kids, delivery drivers, and mail carriers.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Landlords</h3>
                <p className="text-slate-700">Stay compliant with Red Deer bylaws without being on-site.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Residential Service Includes</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Driveway clearing (standard or large)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Front walkway and steps</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Sidewalk clearing (bylaw compliance)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Automatic service when snowfall ≥ 2cm</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Photo proof with every clear</span>
              </li>
            </ul>
          </section>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Residential Snow Removal?</h2>
            <Link href="/#pricing">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                View Residential Plans
              </Button>
            </Link>
            <p className="text-sm text-slate-600 mt-4">
              Starting at $179/month. Call <a href="tel:+15878049266" className="text-blue-600 font-semibold">587-804-9266</a> for questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

