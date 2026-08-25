import Link from "next/link";

export default function Page() {
  const industries = [
    {
      num: "01",
      title: "Startup",
      description: "Keep launches, product, customers, hiring and finance in check and automated as you scale.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fstartup-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/startup",
    },
    {
      num: "02",
      title: "Local Business",
      description: "Coordinate daily work, appointments, staff checks, and customer follow ups.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flocal-business-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/local-business",
    },
    {
      num: "03",
      title: "Logistics",
      description: "Track routes, exceptions, handoffs, and updates without control-tower sprawl.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flogistics-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/logistics",
    },
    {
      num: "04",
      title: "Non Profits",
      description: "Keep programs, volunteers, donors, and reports moving with less manual chasing.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fnon-profits-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/non-profits",
    },
    {
      num: "05",
      title: "Ecommerce",
      description: "Monitor orders, inventory, support loops, campaigns, and fulfillment blockers.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fecommerce-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/ecommerce",
    },
    {
      num: "06",
      title: "Hotels and Stays",
      description: "Coordinate guest requests, housekeeping, maintenance, and team handoffs.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fhotels-and-stays-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/hotels-and-stays",
    },
    {
      num: "07",
      title: "Restaurants",
      description: "Watch shifts, vendors, service issues, and repeat checks from one calm lane.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Frestaurants-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/restaurants",
    },
    {
      num: "08",
      title: "Field Services",
      description: "Give mobile teams a clearer way to report, escalate, and finish the work.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Ffield-services-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/field-services",
    },
    {
      num: "09",
      title: "Gyms and Studios",
      description: "Run classes, memberships, staff tasks, and member follow ups without extra admin.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fgyms-and-studios-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/gyms-and-studios",
    },
    {
      num: "10",
      title: "Health Care and Clinics",
      description: "Keep patient operations, staffing, forms, and follow ups coordinated.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fhealth-care-and-clinics-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/healthcare",
    },
    {
      num: "11",
      title: "Schools and Education",
      description: "Coordinate study plans, schedules, classes, parent communications, staff tasks and student follow ups.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fschools-and-education-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/schools-and-education",
    },
    {
      num: "12",
      title: "Agencies and Firms",
      description: "Coordinate client work, cases, campaigns, approvals, and team updates in one operating view.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fagencies-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/agencies",
    },
    {
      num: "13",
      title: "Investors",
      description: "Turn portfolio updates, founder asks, diligence notes, and follow ups into a calmer investing workflow.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Finvestors-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/investors",
    },
    {
      num: "14",
      title: "Solo Practice",
      description: "Manage clients, tasks, notes, and follow-through without a heavier system.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fsolo-practice-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/solo-practice",
    },
    {
      num: "15",
      title: "Personal",
      description: "Organize your life in a central place, trips, reminders, medications, taxes, habits and routines.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fpersonal-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/personal",
    },
    {
      num: "16",
      title: "Groups and Teams",
      description: "Coordinate plans, trips, bookings, parties, payments, games.",
      image: "https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fgroups-and-trips-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf",
      href: "/for/groups-and-trips",
    },
  ];

  const IndustryCard = ({ industry, className = "" }: { industry: typeof industries[0]; className?: string }) => (
    <Link
      href={industry.href}
      className={`group relative flex flex-col overflow-hidden border border-gray-200 bg-white transition-all hover:shadow-lg ${className}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={industry.image}
          alt={industry.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-mono">{industry.num}</span>
            <span className="text-[#ff4f00]">See More</span>
          </div>
          <h2 className="mt-2 text-xl font-medium text-gray-900">{industry.title}</h2>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{industry.description}</p>
      </div>
    </Link>
  );

  return (
    <div className="mx-auto w-full max-w-[1440px] bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200 px-4 py-8 sm:py-12 lg:py-16">
        <div className="flex items-center gap-2 text-lg font-normal uppercase tracking-normal text-gray-500">
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
          <span>Industries</span>
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Built around the way your team actually operates.
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-600">
          Start from familiar operating patterns, then let Supervisor adapt to the details of your work.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="border-b border-gray-200">
        {/* Row 1: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <IndustryCard industry={industries[0]} className="border-b md:border-r" />
          <IndustryCard industry={industries[1]} className="border-b" />
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <IndustryCard industry={industries[2]} className="border-b md:border-r" />
          <IndustryCard industry={industries[3]} className="border-b md:border-r" />
          <IndustryCard industry={industries[4]} className="border-b" />
        </div>

        {/* Row 3: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <IndustryCard industry={industries[5]} className="border-b md:border-r" />
          <IndustryCard industry={industries[6]} className="border-b md:border-r" />
          <IndustryCard industry={industries[7]} className="border-b" />
        </div>

        {/* Row 4: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <IndustryCard industry={industries[8]} className="border-b md:border-r" />
          <IndustryCard industry={industries[9]} className="border-b" />
        </div>

        {/* Row 5: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <IndustryCard industry={industries[10]} className="border-b md:border-r" />
          <IndustryCard industry={industries[11]} className="border-b md:border-r" />
          <IndustryCard industry={industries[12]} className="border-b" />
        </div>

        {/* Row 6: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <IndustryCard industry={industries[13]} className="md:border-r" />
          <IndustryCard industry={industries[14]} className="md:border-r" />
          <IndustryCard industry={industries[15]} className="" />
        </div>
      </section>
    </div>
  );
}