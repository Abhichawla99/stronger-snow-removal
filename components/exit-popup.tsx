"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

export function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Only show once per session
    if (hasShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Show popup when mouse leaves the top of the viewport
      if (e.clientY <= 0 && !showPopup && !hasShown) {
        setShowPopup(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [showPopup, hasShown])

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="relative max-w-md w-full">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-900"
        >
          <X className="h-5 w-5" />
        </button>
        <CardHeader>
          <CardTitle className="text-2xl">Wait! Don't Miss Out</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-slate-600">
            Get <strong className="text-blue-600">50% off your first month</strong> when you sign up today.
          </p>
          <p className="mb-6 text-sm text-slate-500">
            Limited time offer. Only 12 spots remaining.
          </p>
          <div className="flex flex-col gap-3">
              <Button
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                setShowPopup(false)
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 min-h-[48px] text-lg"
            >
              Claim 50% Off First Month
            </Button>
            <button
              onClick={() => setShowPopup(false)}
              className="text-sm text-slate-500 hover:text-slate-900"
            >
              No thanks, I'll pay full price
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

