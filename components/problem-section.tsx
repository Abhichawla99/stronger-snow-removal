"use client"

import { AlertCircle, Clock, Snowflake, Heart, FileWarning } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Waking up early",
    description: "Shovel before work, or shovel in the dark after",
  },
  {
    icon: Heart,
    title: "Sore backs and pulled muscles",
    description: "From lifting heavy, wet snow",
  },
  {
    icon: Snowflake,
    title: "Slippery steps",
    description: "Putting your family, delivery drivers, and mail carriers at risk",
  },
  {
    icon: FileWarning,
    title: "City bylaws",
    description: "That don't care if you're sick, travelling, or just exhausted",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Winter in Red Deer Doesn't Have to Be a Battle
          </h2>
          <div className="mb-8 space-y-4 text-lg text-slate-700">
            <p>
              It's 6:15 AM on a Tuesday. You look out the window and see 20
              centimetres of fresh snow covering your driveway. Your sidewalk
              is buried. The city requires it cleared within 24 hours, or you
              face a fine.
            </p>
            <p>
              You have two choices: shovel now and risk being late for work, or
              shovel later and risk your back giving out. Again.
            </p>
            <p>
              This isn't a one-time problem. In Red Deer, winter means repeated
              snowfalls. It means -20°C mornings where your breath freezes and
              your hands go numb. It means wet, heavy snow that strains your
              heart and leaves you exhausted before your day even starts.
            </p>
          </div>
          <div className="mb-8">
            <p className="mb-4 text-lg font-semibold text-slate-900">
              It means:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((problem, index) => {
                const Icon = problem.icon
                return (
                  <div
                    key={index}
                    className="flex gap-3 rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer"
                  >
                    <Icon className="h-6 w-6 shrink-0 text-red-500" />
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {problem.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="rounded-lg bg-slate-100 p-6 text-center">
            <p className="text-lg font-semibold text-slate-900">
              You're a busy homeowner. You have a job, kids, or health
              concerns. Or you're a senior who shouldn't be shovelling at all.
              Or you're a landlord who doesn't live on-site but needs to stay
              compliant.
            </p>
            <p className="mt-4 text-xl font-bold text-slate-900">
              You don't need another chore. You need it handled.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

