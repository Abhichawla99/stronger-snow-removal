import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, AlertCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency Snow Removal Red Deer | 24/7 Snow Clearing Service",
  description: "Emergency snow removal service in Red Deer, Alberta. Fast response for urgent snow clearing needs. Available 24/7 during winter storms.",
  keywords: "emergency snow removal Red Deer, urgent snow clearing, 24/7 snow removal, storm snow removal Red Deer",
  openGraph: {
    title: "Emergency Snow Removal Red Deer | Stronger Snow Removal",
    description: "24/7 emergency snow removal services in Red Deer for urgent snow clearing needs.",
    type: "website",
    locale: "en_CA",
  },
}

export default function EmergencySnowRemoval() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Emergency Snow Removal Service in Red Deer
            </h1>
          </div>
          <p className="text-xl text-red-100 mb-6">
            Need urgent snow clearing? We provide fast-response emergency snow removal services.
          </p>
          <a href="tel:+15878049266">
            <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 587-804-9266
            </Button>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When You Need Emergency Snow Removal</h2>
            <p className="text-lg text-slate-700 mb-6">
              Sometimes you need snow cleared immediately. Whether it's an unexpected heavy snowfall, a medical emergency requiring clear access, or a last-minute event, we're here to help.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-slate-700">
                <strong>Emergency Service:</strong> For urgent snow removal needs, call us directly at <a href="tel:+15878049266" className="text-red-600 font-semibold">587-804-9266</a>. We'll do our best to accommodate emergency requests based on availability.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Emergency Snow Removal Situations</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Heavy unexpected snowfall requiring immediate clearing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Medical emergency requiring clear access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Urgent business or event needs</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Bylaw compliance deadline approaching</span>
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Prevent Emergencies with Our Subscription Service</h2>
            <p className="text-slate-700 mb-4">
              The best way to avoid emergency snow removal situations is with our regular subscription service. We automatically clear your property every time it snows, so you never have to worry about urgent clearing needs.
            </p>
            <Link href="/#pricing">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                View Subscription Plans
              </Button>
            </Link>
          </section>

          <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Need Emergency Snow Removal Now?</h2>
            <a href="tel:+15878049266">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                <Phone className="mr-2 h-5 w-5" />
                Call 587-804-9266
              </Button>
            </a>
            <p className="text-sm text-slate-600 mt-4">
              Available during winter months. Response time depends on current route capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

