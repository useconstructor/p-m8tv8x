import Link from 'next/link'
import PricingFaqSection from '../components/PricingFaqSection'

function Check() {
  return (
    <svg className="size-4 shrink-0 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[1440px] border-x border-gray-200 bg-white text-gray-900">
      {/* Pricing Header Section */}
      <section className="flex flex-col items-start gap-0 px-4 w-full border-b border-gray-200 py-8 sm:py-12 lg:py-16">
        <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-wide text-gray-500">
          <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
          </svg>
          <span>Pricing</span>
        </div>
        <h1 className="mt-2 max-w-4xl text-left text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Simple plans for teams ready to move faster.
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Choose the right Supervisor setup for focused web and mobile operations.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200">
        {/* Free Plan */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-light text-gray-900">Free</h2>
            <span className="text-sm font-mono text-gray-400">01</span>
          </div>
          <div className="mb-6">
            <span className="text-5xl font-bold text-gray-900">$0</span>
          </div>
          <p className="text-gray-600 mb-6">
            Start with a focused workspace for one operator and early workflows.
          </p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-2 text-gray-700"><Check />1,000 questions a month</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />3 integrations to your sources</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />3 people in the workspace</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />Community support</li>
          </ul>
          <Link
            href="/app"
            className="inline-flex items-center justify-center gap-2 h-11 px-7 text-sm font-medium rounded-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Start Free
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-light text-gray-900">Pro</h2>
            <span className="text-sm font-mono text-gray-400">02</span>
          </div>
          <div className="mb-6">
            <span className="text-5xl font-bold text-gray-900">$500</span>
            <span className="text-gray-500 ml-1">/mo</span>
          </div>
          <p className="text-gray-600 mb-6">
            For teams ready to automate recurring work with visibility and rhythm.
          </p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-2 text-gray-700"><Check />Everything in Free</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />Unlimited questions per month*</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />Unlimited integrations to your sources*</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />Up to 20 people in workspace</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />1 day response support</li>
          </ul>
          <Link
            href="/app"
            className="inline-flex items-center justify-center gap-2 h-11 px-7 text-sm font-medium rounded-sm bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="flex flex-col p-6 lg:p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-light text-gray-900">Enterprise</h2>
            <span className="text-sm font-mono text-gray-400">03</span>
          </div>
          <div className="mb-6">
            <span className="text-5xl font-bold text-gray-900">Custom</span>
          </div>
          <p className="text-gray-600 mb-6">
            For larger teams with security, custom rollout, and hands-on support needs.
          </p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-2 text-gray-700"><Check />SSO and audit controls</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />Custom data retention</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />Self-hosted option</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />Implementation and rollout support</li>
            <li className="flex items-start gap-2 text-gray-700"><Check />Priority support</li>
          </ul>
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center gap-2 h-11 px-7 text-sm font-medium rounded-sm border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            Book a Call
          </Link>
        </div>
      </section>

      {/* Fair Usage Note */}
      <section className="px-4 py-4 border-b border-gray-200">
        <p className="text-sm text-gray-500">
          *Unlimited questions and integrations are subject to a fair usage policy.
        </p>
      </section>

      {/* Nonprofit Section */}
      <section className="border-b border-gray-200 px-4 py-12 lg:py-16">
        <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-wide text-gray-500 mb-2">
          <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
          </svg>
          <span>Nonprofit programs</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 mb-4">
          Free for qualifying nonprofits.
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl">
          If you are a nonprofit, we offer free Pro packages or 50% discounts depending on your size and funding.
        </p>
        <Link
          href="/book-a-call"
          className="inline-flex items-center gap-2 h-11 px-7 text-sm font-medium rounded-sm border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
          </svg>
          Book a Call
        </Link>
      </section>

      {/* FAQ Section */}
      <PricingFaqSection />
    </main>
  )
}
