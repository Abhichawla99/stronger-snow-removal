import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Heart, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Snow Removal Safety Tips | Red Deer Winter Shoveling Guide",
  description: "Essential snow removal safety tips for Red Deer homeowners. Learn how to shovel safely, prevent injuries, and stay compliant with city bylaws.",
  keywords: "snow removal tips, shoveling safety, Red Deer winter safety, snow shoveling tips, winter safety tips, prevent shoveling injuries",
}

const tips = [
  {
    icon: Heart,
    title: "Warm Up First",
    content: "Just like any exercise, warm up your muscles before shoveling. Take a 5-minute walk or do light stretching to prepare your body.",
  },
  {
    icon: AlertTriangle,
    title: "Know Your Limits",
    content: "If you have heart problems, back issues, or are over 50, consider hiring professionals. Shoveling can be dangerous for those with health conditions.",
  },
  {
    icon: Clock,
    title: "Timing Matters",
    content: "Shovel early in the day when snow is lighter. Wet, heavy snow later in the day increases injury risk. Red Deer bylaws require clearing within 24 hours.",
  },
  {
    icon: Shield,
    title: "Use Proper Technique",
    content: "Push snow instead of lifting when possible. When lifting, bend at the knees, not the back. Don't throw snow over your shoulder—turn your whole body.",
  },
]

export default function SnowRemovalTipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Snow Removal Safety Tips for Red Deer Homeowners
          </h1>
          <p className="mb-12 text-xl text-slate-600">
            Stay safe this winter with these essential shoveling tips
          </p>

          <div className="mb-12 space-y-6 text-lg text-slate-700">
            <p>
              Shoveling snow is one of the most dangerous winter activities. According to studies, shoveling snow sends thousands of Canadians to the emergency room each year due to heart attacks, back injuries, and falls. In Red Deer, where winters can be harsh and snowfalls frequent, it's especially important to know how to shovel safely—or better yet, let professionals handle it.
            </p>
          </div>

          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            {tips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-8 w-8 text-blue-600" />
                      <CardTitle>{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{tip.content}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mb-12 rounded-lg bg-red-50 border-2 border-red-200 p-8">
            <h2 className="mb-4 text-2xl font-bold text-red-900">
              When to Stop Shoveling
            </h2>
            <p className="mb-4 text-slate-700">
              Stop immediately and seek medical attention if you experience:
            </p>
            <ul className="mb-4 space-y-2 text-slate-700">
              <li>• Chest pain or pressure</li>
              <li>• Shortness of breath</li>
              <li>• Dizziness or lightheadedness</li>
              <li>• Severe back pain</li>
              <li>• Nausea or excessive sweating</li>
            </ul>
            <p className="text-slate-700">
              These could be signs of a heart attack or serious injury. Don't ignore them.
            </p>
          </div>

          <div className="mb-12 rounded-lg bg-blue-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Red Deer Snow Removal Bylaws
            </h2>
            <p className="mb-4 text-slate-700">
              The City of Red Deer requires property owners to clear sidewalks within 24 hours after snowfall ends. Failure to comply can result in fines. Our service ensures you're always compliant, automatically.
            </p>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">
              The Safest Option: Let Us Handle It
            </h2>
            <p className="mb-6 text-blue-100">
              Why risk injury when you can have professional snow removal for just $179/month? We handle every snowfall automatically, keep you bylaw-compliant, and send you photo proof. You never have to touch a shovel again.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Get Professional Snow Removal
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

