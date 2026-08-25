"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "Can I start for free?",
    a: "Yes. Free includes 1,000 questions a month, 3 integrations to your sources, 3 people in the workspace, and community support."
  },
  {
    q: "What does Pro add?",
    a: "Pro unlocks unlimited questions per month, unlimited integrations, up to 20 people in the workspace, and 1-day response support — everything you need to automate recurring work at scale."
  },
  {
    q: "Do you offer nonprofit pricing?",
    a: "Yes. We offer free Pro packages or 50% discounts for qualifying nonprofits depending on your size and funding. Book a call to find out if you qualify."
  },
  {
    q: "Can Enterprise be self-hosted?",
    a: "Yes. Enterprise includes a self-hosted option for teams with strict data residency or compliance requirements, along with SSO, audit controls, and custom data retention."
  },
]

export default function PricingFaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="p-6 lg:p-12">
      <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-wide text-gray-500 mb-2">
        <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
        </svg>
        <span>FAQ</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-light leading-tight text-gray-900 mb-8">
        Questions before choosing a plan.
      </h2>
      <div className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between py-5 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-base font-medium text-gray-900">{faq.q}</span>
              <ChevronDown
                className={`ml-4 h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            {open === i && (
              <p className="pb-5 text-sm leading-6 text-gray-500">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
