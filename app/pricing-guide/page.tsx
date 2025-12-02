import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Snow Removal Pricing Guide | Red Deer Snow Removal Costs 2024",
  description: "Complete guide to snow removal pricing in Red Deer. Compare subscription vs per-visit costs. Transparent pricing starting at $179/month.",
  keywords: "snow removal pricing Red Deer, snow removal cost, Red Deer snow removal prices, snow removal subscription cost, how much does snow removal cost",
}

export default function PricingGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Snow Removal Pricing Guide for Red Deer Homeowners
          </h1>
          <p className="mb-12 text-xl text-slate-600">
            Transparent pricing to help you make the best decision for your home
          </p>

          <div className="mb-12 space-y-6 text-lg text-slate-700">
            <p>
              When it comes to snow removal in Red Deer, you have options. But not all options are created equal. Understanding the true cost—both financial and personal—can help you make the best decision for your home and family.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Subscription vs. Per-Visit: The Real Cost
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Subscription Model</CardTitle>
                  <p className="text-3xl font-bold text-blue-600">$179/month</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-green-500" />
                      <span>Unlimited visits per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-green-500" />
                      <span>Predictable monthly cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-green-500" />
                      <span>No surprise charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-green-500" />
                      <span>Guaranteed timing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-green-500" />
                      <span>Cancel anytime</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Per-Visit Model</CardTitle>
                  <p className="text-3xl font-bold text-slate-600">$40-60/visit</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 shrink-0 text-red-500" />
                      <span>Costs add up quickly (10 visits = $400-600)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 shrink-0 text-red-500" />
                      <span>Unpredictable monthly costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 shrink-0 text-red-500" />
                      <span>No guarantee they'll show up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 shrink-0 text-red-500" />
                      <span>Often uninsured</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 shrink-0 text-red-500" />
                      <span>No accountability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12 rounded-lg bg-slate-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Real-World Cost Example
            </h2>
            <p className="mb-4 text-slate-700">
              In a typical Red Deer winter, you might experience 8-12 significant snowfalls. Here's the math:
            </p>
            <div className="space-y-3 text-slate-700">
              <p><strong>Subscription:</strong> $179/month × 5 months = $895 total</p>
              <p><strong>Per-Visit (at $50/visit):</strong> $50 × 10 visits = $500/month × 5 months = $2,500 total</p>
              <p className="text-lg font-semibold text-blue-600">
                Subscription saves you $1,605 per winter!
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-lg bg-blue-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              What's Included in Our $179/Month Plan
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>✓ Up to 2-car driveway clearing</li>
              <li>✓ Front walkway and steps</li>
              <li>✓ Sidewalk along front of property</li>
              <li>✓ Unlimited visits (when snowfall ≥ 2cm)</li>
              <li>✓ 12-24 hour clear-time guarantee</li>
              <li>✓ Text + photo after every clear</li>
              <li>✓ Full liability insurance</li>
              <li>✓ Bylaw compliance guaranteed</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Lock In Your Winter Price?
            </h2>
            <p className="mb-6 text-blue-100">
              Join 87+ Red Deer homeowners who chose predictable pricing over surprise bills.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                View Plans & Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

