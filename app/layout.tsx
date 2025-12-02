import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Stronger Snow Removal Services | Red Deer Snow Removal | Never Shovel Again",
    template: "%s | Stronger Snow Removal Services"
  },
  description: "Professional snow removal service in Red Deer, Alberta. Flat monthly subscription, guaranteed 12-24 hour clearing, photo proof, no contracts. Serving Red Deer, Sylvan Lake, Blackfalds, and surrounding areas.",
  keywords: ["snow removal Red Deer", "Red Deer snow removal", "snow clearing Red Deer", "driveway snow removal", "winter service Red Deer", "snow removal Alberta"],
  authors: [{ name: "Stronger Snow Removal Services" }],
  creator: "Stronger Snow Removal Services",
  publisher: "Stronger Snow Removal Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stronger.ac'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://stronger.ac',
    siteName: 'Stronger Snow Removal Services',
    title: 'Stronger Snow Removal Services | Red Deer Snow Removal',
    description: 'Professional snow removal service in Red Deer, Alberta. Flat monthly subscription with guaranteed timing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stronger Snow Removal Services | Red Deer Snow Removal',
    description: 'Professional snow removal service in Red Deer, Alberta.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        {children}
      </body>
    </html>
  )
}

