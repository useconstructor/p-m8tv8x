import Link from 'next/link';

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[1440px] border-x border-gray-200 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-0 px-4 w-full border-b border-gray-200 py-8 sm:py-12 lg:py-16">
        <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-wider text-gray-500">
          <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" />
          </svg>
          <span>Use Cases</span>
        </div>
        <h1 className="mt-4 max-w-4xl text-left text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Built for the daily rhythms of modern teams.
        </h1>
        <p className="mt-4 max-w-2xl text-left text-lg leading-7 text-gray-600">
          Coordinate field work, manager reviews, handoffs, and follow ups without scattering context.
        </p>
      </section>

      {/* Use Cases Grid */}
      <section className="border-b border-gray-200">
        {/* Row 1 - 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link href="/use-cases/revenue-desk" className="group flex flex-col border-b md:border-r border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">01</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-48 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Revenue desk</h3>
              <p className="text-gray-600">Ask for metrics, sources, and next actions without spreadsheet hunts.</p>
            </div>
          </Link>

          <Link href="/use-cases/field-operations" className="group flex flex-col border-b border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">02</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-48 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Field operations</h3>
              <p className="text-gray-600">Keep frontline teams moving with mobile-first tasks and checks.</p>
            </div>
          </Link>
        </div>

        {/* Row 2 - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Link href="/use-cases/manager-approvals" className="group flex flex-col border-b md:border-r border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">03</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-36 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manager approvals</h3>
              <p className="text-gray-600 text-sm">Prepare high-risk decisions with the context reviewers need.</p>
            </div>
          </Link>

          <Link href="/use-cases/customer-follow-ups" className="group flex flex-col border-b md:border-r border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">04</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-36 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer follow ups</h3>
              <p className="text-gray-600 text-sm">Catch open loops across support, success, and account work.</p>
            </div>
          </Link>

          <Link href="/use-cases/finance-controls" className="group flex flex-col border-b border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">05</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-36 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Finance controls</h3>
              <p className="text-gray-600 text-sm">Review spend, invoices, and policy exceptions before they spread.</p>
            </div>
          </Link>
        </div>

        {/* Row 3 - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Link href="/use-cases/hiring-onboarding" className="group flex flex-col border-b md:border-r border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">06</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-36 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hiring onboarding</h3>
              <p className="text-gray-600 text-sm">Coordinate offers, equipment, access, and first-week readiness.</p>
            </div>
          </Link>

          <Link href="/use-cases/incident-response" className="group flex flex-col border-b md:border-r border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">07</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-36 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident response</h3>
              <p className="text-gray-600 text-sm">Turn alerts, owners, and updates into one calm response lane.</p>
            </div>
          </Link>

          <Link href="/use-cases/vendor-operations" className="group flex flex-col border-b border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">08</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-36 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vendor operations</h3>
              <p className="text-gray-600 text-sm">Monitor renewals, documents, tasks, and vendor follow-through.</p>
            </div>
          </Link>
        </div>

        {/* Row 4 - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          <Link href="/use-cases/executive-briefs" className="group flex flex-col border-b md:border-b-0 md:border-r border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">09</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-28 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Executive briefs</h3>
              <p className="text-gray-600 text-sm">Generate crisp operating updates from live team context.</p>
            </div>
          </Link>

          <Link href="/use-cases/access-reviews" className="group flex flex-col border-b md:border-b-0 md:border-r border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">10</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-28 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Access reviews</h3>
              <p className="text-gray-600 text-sm">Check permissions, owners, and exceptions with audit-ready logs.</p>
            </div>
          </Link>

          <Link href="/use-cases/launch-readiness" className="group flex flex-col border-b md:border-b-0 md:border-r border-gray-200 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">11</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-28 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch readiness</h3>
              <p className="text-gray-600 text-sm">Align product, ops, support, and go-to-market before launch day.</p>
            </div>
          </Link>

          <Link href="/use-cases/knowledge-base" className="group flex flex-col transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <span className="font-mono text-sm text-gray-400">12</span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">See More</span>
            </div>
            <div className="mx-6 mb-4 h-28 rounded bg-gray-100"></div>
            <div className="px-6 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge base</h3>
              <p className="text-gray-600 text-sm">Turn scattered docs into answers teams can actually use.</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
