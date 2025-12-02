import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { StatsSection } from "@/components/stats-section"
import { ProblemSection } from "@/components/problem-section"
import { CTASection } from "@/components/cta-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorks } from "@/components/how-it-works"
import { PricingSection } from "@/components/pricing-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { ExitPopup } from "@/components/exit-popup"
import { Snowfall } from "@/components/snowfall"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stronger Snow Removal Services",
    "image": "https://stronger.ac/og-image.jpg",
    "@id": "https://stronger.ac",
    "url": "https://stronger.ac",
    "telephone": "+15878049266",
    "priceRange": "$179-$229",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Red Deer",
      "addressRegion": "AB",
      "postalCode": "T4N",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.2681,
      "longitude": -113.8112
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Red Deer"
      },
      {
        "@type": "City",
        "name": "Sylvan Lake"
      },
      {
        "@type": "City",
        "name": "Blackfalds"
      },
      {
        "@type": "City",
        "name": "Penhold"
      },
      {
        "@type": "City",
        "name": "Springbrook"
      },
      {
        "@type": "City",
        "name": "Lacombe"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Snow Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Snow Removal Plan",
            "description": "Up to 2-car driveway, front walkway, steps, and sidewalk clearing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Stronger Snow Removal Services"
            }
          },
          "price": "179",
          "priceCurrency": "CAD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corner/Large Driveway Snow Removal Plan",
            "description": "Corner lot or larger driveways with full snow removal service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Stronger Snow Removal Services"
            }
          },
          "price": "229",
          "priceCurrency": "CAD",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <main className="min-h-screen">
      <StructuredData data={structuredData} />
      <Snowfall />
      <Header />
      <Hero />
      <Testimonials />
      <StatsSection />
      <ProblemSection />
      <CTASection />
      <SolutionSection />
      <HowItWorks />
      <CTASection />
      <PricingSection />
      <ComparisonSection />
      <FAQ />
      <FinalCTA />
      <ExitPopup />
    </main>
  )
}
