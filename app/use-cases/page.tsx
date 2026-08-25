import Link from 'next/link';

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[1440px] border-x border-gray-200 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-0 px-4 w-full border-b border-gray-200 py-8 sm:py-12 lg:py-16">
        <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-wider text-gray-500">
          <svg
            aria-hidden="true"
            className="size-3.5 shrink-0 scale-95 text-[#ff4f00]"
            fill="none"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H19V19M1 19L19 1"
              stroke="currentColor"
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2"
            />
          </svg>
          <span>Use Cases</span>
        </div>
        <h1 className="mt-4 max-w-4xl text-left text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Built for the daily rhythms of modern teams
        </h1>
        <p className="mt-4 max-w-2xl text-left text-lg leading-7 text-gray-600">
          Coordinate field work, manager reviews, handoffs, and follow ups without scattering context.
        </p>
      </section>

      {/* Use Cases Grid */}
      <section className="border-b border-gray-200">
        {/* Row 1 - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link
            href="/use-cases/revenue-desk"
            className="group flex flex-col border-b border-r border-gray-200 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">01</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Revenue desk</h3>
            <p className="text-gray-600">Ask for metrics, sources, and next actions without spreadsheet hunts.</p>
          </Link>

          <Link
            href="/use-cases/field-operations"
            className="group flex flex-col border-b border-gray-200 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">02</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Field operations</h3>
            <p className="text-gray-600">Keep frontline teams moving with mobile-first tasks and checks.</p>
          </Link>
        </div>

        {/* Row 2 - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Link
            href="/use-cases/manager-approvals"
            className="group flex flex-col border-b border-r border-gray-200 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">03</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Manager approvals</h3>
            <p className="text-gray-600 text-sm">Prepare high-risk decisions with the context reviewers need.</p>
          </Link>

          <Link
            href="/use-cases/customer-follow-ups"
            className="group flex flex-col border-b border-r border-gray-200 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">04</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer follow ups</h3>
            <p className="text-gray-600 text-sm">Catch open loops across support, success, and account work.</p>
          </Link>

          <Link
            href="/use-cases/finance-controls"
            className="group flex flex-col border-b border-gray-200 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">05</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Finance controls</h3>
            <p className="text-gray-600 text-sm">Review spend, invoices, and policy exceptions before they spread.</p>
          </Link>
        </div>

        {/* Row 3 - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Link
            href="/use-cases/hiring-onboarding"
            className="group flex flex-col border-b border-r border-gray-200 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">06</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hiring onboarding</h3>
            <p className="text-gray-600 text-sm">Coordinate offers, equipment, access, and first-week readiness.</p>
          </Link>

          <Link
            href="/use-cases/incident-response"
            className="group flex flex-col border-b border-r border-gray-200 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">07</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident response</h3>
            <p className="text-gray-600 text-sm">Turn alerts, owners, and updates into one calm response lane.</p>
          </Link>

          <Link
            href="/use-cases/vendor-operations"
            className="group flex flex-col border-b border-gray-200 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">08</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Vendor operations</h3>
            <p className="text-gray-600 text-sm">Monitor renewals, documents, tasks, and vendor follow-through.</p>
          </Link>
        </div>

        {/* Row 4 - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          <Link
            href="/use-cases/executive-briefs"
            className="group flex flex-col border-b border-r border-gray-200 p-6 transition-colors hover:bg-gray-50 md:border-b-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">09</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Executive briefs</h3>
            <p className="text-gray-600 text-sm">Generate crisp operating updates from live team context.</p>
          </Link>

          <Link
            href="/use-cases/access-reviews"
            className="group flex flex-col border-b border-r border-gray-200 p-6 transition-colors hover:bg-gray-50 md:border-b-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">10</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Access reviews</h3>
            <p className="text-gray-600 text-sm">Check permissions, owners, and exceptions with audit-ready logs.</p>
          </Link>

          <Link
            href="/use-cases/launch-readiness"
            className="group flex flex-col border-b border-r border-gray-200 p-6 transition-colors hover:bg-gray-50 md:border-b-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">11</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch readiness</h3>
            <p className="text-gray-600 text-sm">Align product, ops, support, and go-to-market before launch day.</p>
          </Link>

          <Link
            href="/use-cases/knowledge-base"
            className="group flex flex-col border-gray-200 p-6 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm text-[#ff4f00]">12</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge base</h3>
            <p className="text-gray-600 text-sm">Turn scattered docs into answers teams can actually use.</p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Ready to get started?</h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/book-a-call"
            className="inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-white px-7 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            Book a Call
          </Link>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 rounded-sm border border-transparent bg-gray-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}