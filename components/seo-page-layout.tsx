import { Header } from "@/components/header"
import { StructuredData } from "@/components/structured-data"
import { Snowfall } from "@/components/snowfall"

interface SEOPageLayoutProps {
  children: React.ReactNode
  structuredData?: object
}

export function SEOPageLayout({ children, structuredData }: SEOPageLayoutProps) {
  return (
    <div className="min-h-screen">
      {structuredData && <StructuredData data={structuredData} />}
      <Snowfall />
      <Header />
      {children}
    </div>
  )
}

