import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Camera, Users, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Why Choose Stronger Snow Removal Services | Red Deer's #1 Snow Removal",
  description: "Discover why 87+ Red Deer homeowners trust Stronger Snow Removal Services. Guaranteed timing, photo proof, fully insured, and local expertise.",
  keywords: "best snow removal Red Deer, why choose snow removal service, Red Deer snow removal company, reliable snow removal Red Deer",
}

const reasons = [
  {
    icon: Shield,
    title: "100% Guaranteed",
    description: "Your driveway and sidewalk cleared within 12-24 hours after snow stops, or your month is free. No excuses, no exceptions.",
  },
  {
    icon: Camera,
    title: "Photo Proof Every Time",
    description: "We text you a photo after every clear so you know it's done, even if you're at work or traveling. No guessing, no wondering.",
  },
  {
    icon: Users,
    title: "Local Red Deer Team",
    description: "We're not a faceless app or out-of-town company. We're your neighbors, with real people who understand Red Deer winters and bylaws.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Licensed",
    description: "Comprehensive liability insurance protects you and your property. We're a legitimate, licensed business you can trust completely.",
  },
  {
    icon: Clock,
    title: "Predictable Pricing",
    description: "One flat monthly fee—$179. No per-visit charges, no surprise bills. Whether it snows once or ten times, you pay the same amount.",
  },
  {
    icon: CheckCircle,
    title: "Bylaw Compliance",
    description: "We understand Red Deer's snow removal bylaws and ensure your sidewalk is always cleared within the required timeframe. No fines, ever.",
  },
]

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Why Choose Stronger Snow Removal Services?
          </h1>
          <p className="mb-12 text-xl text-slate-600">
            Join 87+ Red Deer homeowners who never touch a shovel anymore
          </p>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-8 w-8 text-blue-600" />
                      <CardTitle>{reason.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{reason.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mb-12 rounded-lg bg-slate-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              We're Not Like Other Snow Removal Services
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-green-700">What We Are:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>✓ Local Red Deer business</li>
                  <li>✓ Fully insured and licensed</li>
                  <li>✓ Guaranteed timing</li>
                  <li>✓ Photo proof every time</li>
                  <li>✓ Route-limited for reliability</li>
                  <li>✓ Real people, not an app</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-red-700">What We're Not:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>✗ Fly-by-night operators</li>
                  <li>✗ Uninsured cash deals</li>
                  <li>✗ No-show promises</li>
                  <li>✗ Surprise per-visit charges</li>
                  <li>✗ Faceless gig apps</li>
                  <li>✗ Overbooked routes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-lg border-2 border-blue-500 bg-blue-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Our Promise to You
            </h2>
            <p className="mb-4 text-lg text-slate-700">
              When you subscribe to Stronger Snow Removal Services, you're not just getting snow removal. You're getting:
            </p>
            <ul className="mb-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 shrink-0 text-blue-600" />
                <span><strong>Peace of mind:</strong> Never worry about shoveling again, no matter how much it snows</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 shrink-0 text-blue-600" />
                <span><strong>Time back:</strong> Sleep in, go to work, travel—we handle it all</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 shrink-0 text-blue-600" />
                <span><strong>Safety:</strong> No risk of injury from shoveling heavy, wet snow</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 shrink-0 text-blue-600" />
                <span><strong>Compliance:</strong> Always bylaw-compliant, no fines ever</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 shrink-0 text-blue-600" />
                <span><strong>Predictability:</strong> One flat monthly fee, no surprises</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Experience the Difference?
            </h2>
            <p className="mb-6 text-blue-100">
              Join the growing number of Red Deer homeowners who chose reliability, professionalism, and peace of mind.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto">
                  Get Started Today
                </Button>
              </Link>
              <a href="tel:+15878049266">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 587-804-9266
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

