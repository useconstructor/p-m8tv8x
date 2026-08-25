"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "What does Supervisor actually do?",
    a: "Supervisor is an AI-first workspace that connects to your tools, files, and data so your team can ask questions, monitor operations, schedule automated checks, and build small internal apps — all without writing code or switching between a dozen tabs."
  },
  {
    q: "Do we need to change how our team works?",
    a: "No. Supervisor fits into the workflows your team already has. It connects to the tools you use today and surfaces information where your team already operates — on mobile, web, or your existing platforms."
  },
  {
    q: "Can Supervisor work on mobile?",
    a: "Yes. Supervisor is fully available on mobile. Your team can answer questions, respond to alerts, and take action from their phone, whether they're on the floor, in the field, or on the road."
  },
  {
    q: "How does Supervisor handle permissions?",
    a: "Supervisor has fine-grained permission controls. You can define exactly who can see what, who can take which actions, and how approvals flow through your team — so the right people always have the right access."
  },
  {
    q: "Can it connect to our existing data sources?",
    a: "Yes. Supervisor integrates with your existing tools, databases, APIs, and file systems. It finds the signal across all of them so you don't have to chase down answers manually."
  },
  {
    q: "How fast can we get started?",
    a: "Most teams are up and running in under five minutes. Connect your tools, explain how your business works, invite your team, and start using it — no lengthy onboarding or professional services required."
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="border-b border-gray-200 py-12 lg:py-16 px-4">
      <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-normal text-gray-500 mb-4">
        <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
        </svg>
        <span>Common Questions</span>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">FAQ.</h2>
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
