"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Snowflake, Menu, X, Phone } from "lucide-react"
import { STRIPE_PURCHASE_URL } from "@/lib/constants"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300"
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center gap-2">
            <Snowflake className="h-6 w-6 text-blue-600 md:h-8 md:w-8" />
            <span className="text-xl font-bold text-slate-900 transition-colors md:text-2xl">
              <span className="text-blue-600">Stronger</span>{" "}
              <span className="text-slate-900">Snow Removal Services</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+15878049266"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              <Phone className="h-4 w-4" />
              <span>587-804-9266</span>
            </a>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              FAQ
            </button>
            <Button
              onClick={() => window.open(STRIPE_PURCHASE_URL, "_blank")}
              className="bg-blue-600 text-white hover:bg-blue-700 min-h-[48px]"
            >
              Get Winter Freedom
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="tel:+15878049266"
                className="flex items-center gap-2 px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                <Phone className="h-4 w-4" />
                <span>587-804-9266</span>
              </a>
              <button
                onClick={() => scrollToSection("pricing")}
                className="px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="px-4 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                FAQ
              </button>
              <div className="px-4">
                <Button
                  onClick={() => window.open(STRIPE_PURCHASE_URL, "_blank")}
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 min-h-[48px]"
                >
                  Get Winter Freedom
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

