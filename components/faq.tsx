"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { StructuredData } from "@/components/structured-data"

const faqs = [
  {
    question: "How often do you come?",
    answer:
      "We come automatically every time it snows 2 cm or more. There's no limit to how many times we visit in a month. You pay the same flat fee whether it snows once or ten times.",
  },
  {
    question: "What if I'm away or at work when you come?",
    answer:
      "You don't need to be home. We'll clear your property and text you a photo when we're done. You'll know it's handled even if you're travelling or at the office.",
  },
  {
    question: "Can I cancel any time?",
    answer:
      "Yes. Cancel before the next month's billing cycle with no penalties or fees. No long-term contracts.",
  },
  {
    question: "What areas of Red Deer do you cover?",
    answer:
      "We cover Red Deer and nearby bedroom communities including Sylvan Lake, Blackfalds, Penhold, Springbrook, and Lacombe. Enter your address during signup to confirm coverage.",
  },
]

export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section id="faq" className="py-20">
      <StructuredData data={faqSchema} />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
