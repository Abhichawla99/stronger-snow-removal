"use client"

import { CTAButton } from "./cta-button"

export function CTASection() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Sleep In This Winter?
          </h2>
          <p className="mb-8 text-lg text-slate-600">
            Join 87 Red Deer homeowners who never touch a shovel anymore.
          </p>
          <CTAButton spotsRemaining={12} />
        </div>
      </div>
    </section>
  )
}

