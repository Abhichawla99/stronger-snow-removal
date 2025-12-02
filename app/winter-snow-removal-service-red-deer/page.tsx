import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Snowflake } from "lucide-react"

export const metadata: Metadata = {
  title: "Winter Snow Removal Service Red Deer | All Season Service",
  description: "Complete winter snow removal service in Red Deer, Alberta. All-season coverage from November to April. Reliable, automatic snow clearing throughout winter.",
  keywords: "winter snow removal Red Deer, all season snow removal, winter snow clearing service, Red Deer winter service",
  openGraph: {
    title: "Winter Snow Removal Service Red Deer | Stronger Snow Removal",
    description: "Complete winter snow removal service in Red Deer for the entire season.",
    type: "website",
    locale: "en_CA",
  },
}

export default function WinterSnowRemoval() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Snowflake className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Winter Snow Removal Service in Red Deer
            </h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Complete winter coverage from first snowfall to spring. Never worry about snow all season long.
          </p>
          <Link href="/#pricing">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Get Winter Service
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">All-Season Winter Snow Removal</h2>
            <p className="text-lg text-slate-700 mb-6">
              Red Deer winters can be long and unpredictable. Our winter snow removal service provides complete coverage throughout the entire winter season, typically from November through April. One subscription covers you for the whole winter.
            </p>
            <p className="text-lg text-slate-700">
              Whether it's an early November snowfall or a late April storm, we're there to clear your property automatically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Winter Service Coverage</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Early Winter (November-December)</h3>
                <p className="text-slate-700">We're ready from the first snowfall of the season.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Peak Winter (January-February)</h3>
                <p className="text-slate-700">Heavy snowfall months? No problem. We clear every time it snows 2cm or more.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Late Winter (March-April)</h3>
                <p className="text-slate-700">We stay active until spring, handling late-season snowfalls.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Winter Service</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">One subscription covers entire winter season</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">No need to rebook or reschedule</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Automatic service throughout winter</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Predictable monthly pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                <span className="text-slate-700">Cancel anytime if you move or no longer need service</span>
              </li>
            </ul>
          </section>

          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Complete Winter Coverage?</h2>
            <Link href="/#pricing">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Start Winter Service
              </Button>
            </Link>
            <p className="text-sm text-slate-600 mt-4">
              Call <a href="tel:+15878049266" className="text-blue-600 font-semibold">587-804-9266</a> for winter service questions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

