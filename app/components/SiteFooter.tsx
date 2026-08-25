import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Supervise and Run your business with Artificial Intelligence | Supervisor"
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://x.com/trysupervisor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/trysupervisor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/trysupervisor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@trysupervisor.com"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <a
              href="https://trysupervisor.com/status"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              Status All Systems Operational
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Main</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/app" className="text-gray-500 hover:text-gray-900 transition-colors">
                  App
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/for" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/blog" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/documentation" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/resources/press-kit" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2026 Supervisor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}