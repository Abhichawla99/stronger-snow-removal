"use client"

import Link from "next/link"
import { StructuredData } from "./structured-data"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://stronger.ac${item.url}`
    }))
  }

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
        <ol className="flex items-center gap-2 text-sm text-slate-600">
          <li>
            <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-slate-400" />
              {index === items.length - 1 ? (
                <span className="text-slate-900 font-medium">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-blue-600">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}


