import Link from "next/link";
import FaqSection from "./components/FaqSection";

const features = [
  { num: "01", title: "Answer Questions", desc: "Ask anything about your business and Supervisor searches the right tools and returns the answer with sources." },
  { num: "02", title: "Automatic Smart Supervision", desc: "Automatically monitor that everything is running as expected and get alerts when something needs attention." },
  { num: "03", title: "Smart Permissions", desc: "Control who can see what and who can do what, with fine-grained role-based permissions." },
  { num: "04", title: "Available Everywhere", desc: "Use Supervisor on mobile, desktop, or anywhere your team already works — web, iOS, Android." },
  { num: "05", title: "Integrate With Any Source", desc: "Connect your existing tools, files, databases, and APIs. Supervisor finds the signal across all of them." },
  { num: "06", title: "Schedule Actions", desc: "Set up recurring checks and processes once; Supervisor runs them on time, every time." },
  { num: "07", title: "Build Mini Apps", desc: "Build focused internal tools like scanners, live maps, and order queues just by describing them." },
  { num: "08", title: "Device Plugins", desc: "Extend Supervisor to cameras, sensors, and hardware already plugged into your operation." },
  { num: "09", title: "Secure, Encrypted and Compliant", desc: "Enterprise-grade encryption and access controls keep your business data safe and auditable." },
  { num: "10", title: "Offline Support", desc: "Keep working when the connection drops. Supervisor syncs automatically when you're back online." },
]

const testimonials = [
  {
    quote: "It feels like an operator who never forgets the boring but important parts of the business.",
    name: "Jordan Lee",
    role: "General Manager, Harbor House",
  },
  {
    quote: "Approvals got faster because everyone can see the why before they make the call.",
    name: "Sofia Alvarez",
    role: "",
  },
  {
    quote: "Supervisor helped us connect field updates, customer requests, and schedules into one calm workflow.",
    name: "Noah Bennett",
    role: "Head of Service",
  },
  {
    quote: "Our team finally trusts the process because Supervisor keeps everyone aligned and accountable.",
    name: "Shah",
    role: "Studio",
  },
]

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[1440px] border-x border-gray-200">
      {/* Hero Section */}
      <section className="grid items-stretch overflow-hidden xl:grid-cols-2">
        <div className="flex h-full min-h-full flex-col xl:border-r xl:border-gray-200">
          <section className="flex flex-col items-start gap-0 px-4 w-full border-b border-gray-200 py-4 sm:py-8 lg:py-12">
            <div className="flex items-center gap-2 font-mono text-lg font-normal uppercase leading-none tracking-normal text-gray-500">
              <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
              </svg>
              <span>AUTOMATE YOUR BUSINESS</span>
            </div>
            <h1 className="mt-2 max-w-5xl text-left font-sans text-5xl leading-none tracking-normal text-gray-900 sm:text-6xl lg:text-[64px]">
              Supervise and Run your business with Artificial Intelligence.
            </h1>
            <p className="mt-4 max-w-2xl text-left font-sans text-xl leading-7 tracking-normal text-gray-500">
              Supervisor brings AI-first workflows, team visibility, and mobile access into a focused workspace.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-5 pb-2">
              <Link
                href="/book-a-call"
                className="group inline-flex shrink-0 items-center border bg-white border-gray-200 whitespace-nowrap transition-all outline-none select-none hover:bg-gray-100 hover:text-gray-900 h-11 cursor-pointer justify-center gap-2 rounded-sm px-7 text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone size-4" aria-hidden="true">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                Book a Call
              </Link>
              <Link
                href="/app"
                className="group inline-flex shrink-0 items-center border border-transparent bg-gray-900 text-white whitespace-nowrap transition-all outline-none select-none hover:bg-gray-800 h-11 cursor-pointer justify-center gap-2 rounded-sm px-7 text-sm font-medium"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </section>

          {/* Feature Buttons Grid */}
          <div className="mt-auto grid min-h-56 grid-cols-2 grid-rows-2 border-t border-b border-gray-200">
            <button className="group relative flex min-h-28 flex-col items-start justify-center overflow-hidden border-gray-200 p-3 text-left transition-colors hover:bg-white bg-white border-r border-b" type="button">
              <div className="flex w-full items-stretch gap-4">
                <div className="flex aspect-square min-h-16 shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-50 text-gray-900 transition-colors group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0" aria-hidden="true">
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                  </svg>
                </div>
                <div className="flex min-w-0 max-w-sm flex-col justify-center gap-1">
                  <div className="font-sans text-xl leading-6 text-gray-900">Ask Questions</div>
                  <div className="line-clamp-2 font-sans text-sm leading-5 text-gray-500">Ask anything about your business and we'll find you the answer.</div>
                </div>
              </div>
            </button>

            <button className="group relative flex min-h-28 flex-col items-start justify-center overflow-hidden border-gray-200 p-3 text-left transition-colors hover:bg-white border-b" type="button">
              <div className="flex w-full items-stretch gap-4">
                <div className="flex aspect-square min-h-16 shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-50 text-gray-900 transition-colors group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0" aria-hidden="true">
                    <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                    <path d="M4 6h.01"></path>
                    <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                    <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="m13.41 10.59 5.66-5.66"></path>
                  </svg>
                </div>
                <div className="flex min-w-0 max-w-sm flex-col justify-center gap-1">
                  <div className="font-sans text-xl leading-6 text-gray-900">Supervise</div>
                  <div className="line-clamp-2 font-sans text-sm leading-5 text-gray-500">Automatically and based on your preferences, review that everything is running smoothly.</div>
                </div>
              </div>
            </button>

            <button className="group relative flex min-h-28 flex-col items-start justify-center overflow-hidden border-gray-200 p-3 text-left transition-colors hover:bg-white border-r" type="button">
              <div className="flex w-full items-stretch gap-4">
                <div className="flex aspect-square min-h-16 shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-50 text-gray-900 transition-colors group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6h4"></path>
                  </svg>
                </div>
                <div className="flex min-w-0 max-w-sm flex-col justify-center gap-1">
                  <div className="font-sans text-xl leading-6 text-gray-900">Schedule Actions</div>
                  <div className="line-clamp-2 font-sans text-sm leading-5 text-gray-500">Set up things which should run on a schedule, we'll run those for you.</div>
                </div>
              </div>
            </button>

            <button className="group relative flex min-h-28 flex-col items-start justify-center overflow-hidden border-gray-200 p-3 text-left transition-colors hover:bg-white" type="button">
              <div className="flex w-full items-stretch gap-4">
                <div className="flex aspect-square min-h-16 shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-gray-50 text-gray-900 transition-colors group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0" aria-hidden="true">
                    <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path>
                    <path d="m18 15 4-4"></path>
                    <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
                  </svg>
                </div>
                <div className="flex min-w-0 max-w-sm flex-col justify-center gap-1">
                  <div className="font-sans text-xl leading-6 text-gray-900">Mini Apps</div>
                  <div className="line-clamp-2 font-sans text-sm leading-5 text-gray-500">Build simple software to run your business, just by asking for it.</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Column - Phone and Features */}
        <div className="h-full">
          <div className="h-full w-full">
            <div className="grid h-full w-full grid-cols-1 items-stretch border-b border-gray-200 sm:grid-cols-2">
              {/* Phone Frame */}
              <div className="border-b border-gray-200 p-4 sm:border-r sm:border-b-0 lg:p-6">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="relative w-48 lg:w-72 max-w-full">
                    <div className="absolute inset-x-[5%] top-[2%] bottom-[2.5%] z-0 overflow-hidden rounded-[2rem] bg-white">
                      <img
                        alt=""
                        className="pointer-events-none absolute inset-x-0 top-0.5 z-20 h-auto w-full"
                        src="https://trysupervisor.com/_next/image?url=%2Fimages%2Fiphone-status-bar.png&w=3840&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                      />
                      <div className="w-full h-full pt-8 px-3">
                        <div className="bg-gray-50 rounded-lg p-3 mb-2">
                          <div className="text-xs text-gray-500 mb-1">Question desk</div>
                          <div className="text-xs font-medium text-green-600">Answered</div>
                          <div className="text-sm font-semibold text-gray-900 mt-1">Ask anything about the business</div>
                          <div className="text-xs text-gray-500 mt-1">Supervisor searches the right tools and returns the answer with sources.</div>
                        </div>
                      </div>
                    </div>
                    <img
                      alt="iPhone frame"
                      className="relative z-10 h-auto w-full"
                      src="https://trysupervisor.com/_next/image?url=%2Fimages%2Fiphone-17-black-portrait.png&w=3840&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                    />
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-rows-4 divide-y divide-gray-200">
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">Question desk</span>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">Answered</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">Ask anything about the business</h3>
                  <p className="text-xs text-gray-500 mt-1">Supervisor searches the right tools and returns the answer with sources.</p>
                  <div className="mt-2 text-xs text-gray-400">
                    <span className="mr-3">6 sources</span>
                    <span>2 actions</span>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">Operations watch</span>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Watching</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">Every team status in one view</h3>
                  <p className="text-xs text-gray-500 mt-1">Dashboards, alerts, and owner follow ups stay connected to the work.</p>
                  <div className="mt-2 text-xs text-gray-400">
                    <span className="mr-3">12 checks</span>
                    <span>4 alerts</span>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">Scheduled actions</span>
                    <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">Scheduled</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">Recurring checks run on time</h3>
                  <p className="text-xs text-gray-500 mt-1">Define the cadence once and Supervisor keeps the process moving.</p>
                  <div className="mt-2 text-xs text-gray-400">
                    <span className="mr-3">18 runs</span>
                    <span>7 routines</span>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">Mini apps</span>
                    <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Built</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">Build tools by asking for them</h3>
                  <p className="text-xs text-gray-500 mt-1">Spin up focused tools like scanners, live maps, and order queues.</p>
                  <div className="mt-2 text-xs text-gray-400">
                    <span className="mr-3">9 apps</span>
                    <span>3 live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="border-b border-gray-200 py-12 lg:py-16 px-4">
        <div className="flex items-center gap-2 font-mono text-lg font-normal uppercase leading-none tracking-normal text-gray-500 mb-4">
          <span>SET IT UP IN 5 MINUTES</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">How it Works.</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-6"></div>
            <div className="text-6xl font-light text-gray-300 mb-4">01</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect and Explain</h3>
            <p className="text-gray-500">Link your tools, files and workflows, give us as much context as possible about how your business works.</p>
          </div>

          <div className="flex flex-col">
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-6"></div>
            <div className="text-6xl font-light text-gray-300 mb-4">02</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Invite your Team</h3>
            <p className="text-gray-500">It's as simple as entering their email and role, we'll handle the rest.</p>
          </div>

          <div className="flex flex-col">
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-6"></div>
            <div className="text-6xl font-light text-gray-300 mb-4">03</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Start using it</h3>
            <p className="text-gray-500">Set it up in your favorite platform.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="border-b border-gray-200 py-12 lg:py-16 px-4">
        <div className="flex items-center gap-2 font-mono text-lg font-normal uppercase leading-none tracking-normal text-gray-500 mb-4">
          <span>Industries</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Built around the way your team actually operates.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Link href="/for/startup" className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fstartup-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Startup"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Startup</h3>
              <p className="text-sm text-gray-500 mt-1">Keep launches, product, customers, hiring and finance in check and automated as you scale.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/local-business" className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flocal-business-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Local Business"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Local Business</h3>
              <p className="text-sm text-gray-500 mt-1">Coordinate daily work, appointments, staff checks, and customer follow ups.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/logistics" className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flogistics-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Logistics"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Logistics</h3>
              <p className="text-sm text-gray-500 mt-1">Track routes, exceptions, handoffs, and updates without control-tower sprawl.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/non-profits" className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fnon-profits-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Non Profits"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Non Profits</h3>
              <p className="text-sm text-gray-500 mt-1">Keep programs, volunteers, donors, and reports moving with less manual chasing.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/restaurants" className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Frestaurants-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Restaurants"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Restaurants</h3>
              <p className="text-sm text-gray-500 mt-1">Watch shifts, vendors, service issues, and repeat checks from one calm lane.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/hotels-and-stays" className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="w-full h-40 bg-gray-100"></div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Hotels and Stays</h3>
              <p className="text-sm text-gray-500 mt-1">Coordinate guest requests, housekeeping, maintenance, and team handoffs.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/ecommerce" className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="w-full h-40 bg-gray-100"></div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Ecommerce</h3>
              <p className="text-sm text-gray-500 mt-1">Monitor orders, inventory, support loops, campaigns, and fulfillment blockers.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/field-services" className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="w-full h-40 bg-gray-100"></div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Field Services</h3>
              <p className="text-sm text-gray-500 mt-1">Give mobile teams a clearer way to report, escalate, and finish the work.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Ready to Get Started CTA */}
      <section className="border-b border-gray-200 py-16 lg:py-24 px-4">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-normal text-gray-500 mb-4">
            <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
            </svg>
            <span>START MAKING YOUR BUSINESS RUN ITSELF</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Ready to Get Started?</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book-a-call"
              className="group inline-flex shrink-0 items-center border bg-white border-gray-200 whitespace-nowrap transition-all outline-none select-none hover:bg-gray-100 h-11 cursor-pointer justify-center gap-2 rounded-sm px-7 text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              Book a Call
            </Link>
            <Link
              href="/app"
              className="group inline-flex shrink-0 items-center border border-transparent bg-gray-900 text-white whitespace-nowrap transition-all outline-none select-none hover:bg-gray-800 h-11 cursor-pointer justify-center gap-2 rounded-sm px-7 text-sm font-medium"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-gray-200 py-12 lg:py-16 px-4">
        <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-normal text-gray-500 mb-4">
          <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
          </svg>
          <span>SUPERVISOR DOES ALMOST EVERYTHING</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Features.</h2>
        <div className="grid md:grid-cols-2 border-y border-gray-200 divide-y divide-gray-200 md:divide-y-0">
          {features.map((feature, i) => (
            <div
              key={feature.num}
              className={`py-6 px-4 ${i % 2 === 0 ? 'md:border-r md:border-gray-200' : ''} ${i < features.length - 2 ? 'border-b border-gray-200' : ''}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm text-gray-400">{feature.num}</span>
                <Link href="/use-cases" className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors">
                  See More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-6">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-b border-gray-200 py-12 lg:py-16 px-4">
        <div className="flex items-center gap-2 font-mono text-sm font-normal uppercase leading-none tracking-normal text-gray-500 mb-4">
          <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
          </svg>
          <span>WHAT PEOPLE SAY</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Testimonials.</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-gray-200 rounded-sm p-6 flex flex-col gap-4">
              <p className="text-gray-700 text-base leading-7">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                {t.role && <div className="text-sm text-gray-500">{t.role}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </main>
  );
}
