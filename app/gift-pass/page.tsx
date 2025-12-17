import { Metadata } from "next"
import { GiftPassForm } from "@/components/gift-pass-form"
import { Snowfall } from "@/components/snowfall"
import { StructuredData } from "@/components/structured-data"
import {
  Gift,
  Sparkles,
  Clock,
  Shield,
  Heart,
  Calendar,
  Phone,
  Star,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Winter Gift Pass - Perfect Gift for Parents | Stronger Snow Removal",
  description:
    "Give the gift of a stress-free winter! $499 for unlimited snow removal until March 31st with priority support. The perfect Christmas gift for parents.",
  openGraph: {
    title: "Winter Gift Pass - Perfect Christmas Gift | Stronger Snow Removal",
    description:
      "Unlimited snow removal until March 31st + priority support for $499. Show your parents you care this holiday season.",
  },
}

export default function GiftPassPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Winter Snow Removal Gift Pass",
    description:
      "Unlimited snow removal service until March 31st with priority support",
    brand: {
      "@type": "Brand",
      name: "Stronger Snow Removal Services",
    },
    offers: {
      "@type": "Offer",
      price: "499",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2025-03-31",
      url: "https://stronger.ac/gift-pass",
    },
  }

  const benefits = [
    {
      icon: Gift,
      title: "Unlimited Snow Removal",
      description: "Every single snowfall cleared until March 31st, 2025",
    },
    {
      icon: Star,
      title: "Priority Support",
      description: "First on the route, cleared before 7 AM guaranteed",
    },
    {
      icon: Clock,
      title: "Set It & Forget It",
      description: "No scheduling, no reminders—we handle everything",
    },
    {
      icon: Shield,
      title: "100% Guaranteed",
      description: "Photo proof after every service, money-back guarantee",
    },
  ]

  const whyPerfectGift = [
    {
      icon: Heart,
      title: "Show You Care",
      description:
        "Give peace of mind knowing they'll never slip or strain their back",
    },
    {
      icon: Calendar,
      title: "Lasts All Winter",
      description: "A gift they'll appreciate every single snowfall through March",
    },
    {
      icon: Phone,
      title: "Easy to Give",
      description:
        "We'll send you a beautiful gift certificate to present on Christmas",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <StructuredData data={structuredData} />
      <Snowfall />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-green-700 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container relative mx-auto px-4 pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="mx-auto max-w-5xl text-center">
            {/* Limited Time Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-bold">LIMITED TIME HOLIDAY OFFER</span>
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Give the Gift of a{" "}
              <span className="text-yellow-300">Stress-Free Winter</span>
            </h1>

            <p className="mb-8 text-xl font-medium text-red-100 sm:text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed">
              The perfect Christmas gift for parents: Unlimited snow removal
              through March 31st + Priority Support
            </p>

            {/* Pricing Box */}
            <div className="mb-8 inline-block rounded-2xl bg-white p-8 shadow-2xl">
              <div className="mb-3 flex items-center justify-center gap-3">
                <Gift className="h-8 w-8 text-red-600" />
                <span className="text-sm font-bold text-red-600 uppercase tracking-wide">
                  Holiday Special
                </span>
              </div>
              <div className="mb-2 flex items-baseline justify-center gap-2">
                <span className="text-2xl font-bold text-gray-400 line-through">
                  $799
                </span>
                <span className="text-6xl font-bold text-gray-900">$499</span>
              </div>
              <p className="mb-4 text-gray-600 font-semibold">
                One-time payment • No monthly fees • No contracts
              </p>
              <div className="space-y-2 text-left text-sm">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1">
                    <Gift className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Unlimited clears</strong> until March 31st, 2025
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1">
                    <Star className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Priority service</strong> - cleared before 7 AM
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>100% guarantee</strong> with photo proof
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg text-yellow-200 font-semibold animate-pulse">
              🎄 Only 8 gift passes remaining for this season
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">4.9★</div>
              <div className="text-sm text-gray-600">87 Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">6+</div>
              <div className="text-sm text-gray-600">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This is Perfect Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Why This Is the Perfect Gift
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              More than just a service—it's peace of mind for the people you love
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-3 mb-16">
            {whyPerfectGift.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-colors"
              >
                <div className="mb-4 inline-flex rounded-full bg-gradient-to-br from-red-100 to-green-100 p-4">
                  <item.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-2 border-blue-200">
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mb-4 text-lg text-gray-700 italic">
              "My daughter bought this for us as a Christmas gift last year and it
              was honestly the best present we've ever received. We never worried
              about the driveway all winter, and they were always there before we
              even woke up. Can't recommend this enough!"
            </p>
            <p className="font-semibold text-gray-900">
              - Margaret T., Red Deer
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              What's Included
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Everything they need for a worry-free winter
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-md border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <div className="rounded-lg bg-blue-100 p-3">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Get Your Gift Pass Now
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-blue-100">
              Complete the form below to secure your holiday gift pass
            </p>
          </div>

          <GiftPassForm />

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center text-white">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="text-sm">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6" />
              <span className="text-sm">100% Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="h-6 w-6" />
              <span className="text-sm">Gift Certificate Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  How does the gift certificate work?
                </h3>
                <p className="text-gray-600">
                  After purchase, we'll email you a beautiful printable gift
                  certificate perfect for giving on Christmas morning. The recipient
                  just needs to contact us to activate their service.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  What if they already have snow removal service?
                </h3>
                <p className="text-gray-600">
                  No problem! The gift pass can be activated for next season, or we
                  can work with you to transfer it to another family member or
                  friend.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  What does "priority support" mean?
                </h3>
                <p className="text-gray-600">
                  Gift pass holders are placed first on our route schedule, meaning
                  they're guaranteed to have their driveway cleared before 7 AM after
                  every snowfall.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Is this really unlimited?
                </h3>
                <p className="text-gray-600">
                  Yes! Whether it snows 10 times or 50 times between now and March
                  31st, we'll be there every single time with no additional charges.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  What areas do you serve?
                </h3>
                <p className="text-gray-600">
                  We serve Red Deer, Sylvan Lake, Blackfalds, Penhold, Springbrook,
                  and Lacombe. If you're unsure about your specific address, just
                  give us a call!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-green-600 text-white text-center">
        <div className="container mx-auto px-4">
          <Gift className="mx-auto mb-6 h-16 w-16" />
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Give Them Winter Without Worry
          </h2>
          <p className="mb-8 text-xl text-red-100 max-w-2xl mx-auto">
            Only 8 gift passes available. Secure yours before they're gone.
          </p>
          <a
            href="#form"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-red-600 hover:bg-blue-50 transition-colors shadow-lg"
          >
            Claim Your Gift Pass →
          </a>
        </div>
      </section>
    </main>
  )
}

