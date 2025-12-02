import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Stronger Snow Removal Services | Red Deer's Trusted Snow Removal Company",
  description: "Learn about Stronger Snow Removal Services, Red Deer's premier residential snow removal company. Local, insured, and reliable since our founding. Serving Red Deer, Sylvan Lake, Blackfalds, and surrounding areas.",
  keywords: "about snow removal Red Deer, snow removal company Red Deer, local snow removal, Red Deer snow removal service",
  openGraph: {
    title: "About Stronger Snow Removal Services | Red Deer",
    description: "Red Deer's premier residential snow removal company. Local, insured, and reliable.",
    type: "website",
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stronger Snow Removal Services",
    "description": "Residential snow removal service in Red Deer, Alberta",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Red Deer",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "telephone": "+15878049266",
    "priceRange": "$179-$229",
    "areaServed": ["Red Deer", "Sylvan Lake", "Blackfalds", "Penhold", "Springbrook", "Lacombe"]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
              About Stronger Snow Removal Services
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-700 mb-6">
                Stronger Snow Removal Services is Red Deer's premier residential snow removal company, 
                dedicated to keeping your driveways and walkways clear all winter long.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-700 mb-6">
                We believe that winter shouldn't be a burden. Our mission is to provide reliable, 
                affordable snow removal services that give Red Deer homeowners their time and peace 
                of mind back. No more early morning shoveling, no more sore backs, no more worrying 
                about city bylaws.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">
                Why Choose Stronger Snow Removal Services?
              </h2>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li><strong>Local & Reliable:</strong> We're a Red Deer-based company that understands Alberta winters</li>
                <li><strong>Fully Insured:</strong> Comprehensive liability insurance protects you and your property</li>
                <li><strong>Guaranteed Service:</strong> 12-24 hour clear-time guarantee or your month is free</li>
                <li><strong>Photo Proof:</strong> Receive a text and photo after every clear for complete peace of mind</li>
                <li><strong>No Contracts:</strong> Month-to-month service, cancel anytime</li>
                <li><strong>Route-Limited:</strong> We cap our routes at 40 homes to ensure reliability</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">
                Service Areas
              </h2>
              <p className="text-slate-700 mb-4">
                We proudly serve Red Deer and surrounding bedroom communities including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
                <li>Red Deer</li>
                <li>Sylvan Lake</li>
                <li>Blackfalds</li>
                <li>Penhold</li>
                <li>Springbrook</li>
                <li>Lacombe</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">
                Our Commitment
              </h2>
              <p className="text-slate-700 mb-6">
                When you choose Stronger Snow Removal Services, you're choosing a company that values 
                reliability, transparency, and customer satisfaction. We're not a faceless app or a 
                random gig worker—we're your neighbors, committed to doing the job right every single time.
              </p>

              <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ready to Join 87+ Happy Red Deer Homeowners?
                </h3>
                <p className="text-slate-700 mb-6">
                  Get started with our flat monthly subscription service today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/">View Pricing</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
