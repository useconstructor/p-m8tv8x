"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const productLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Features', href: '/' },
    { label: 'How it Works', href: '/' },
    { label: 'Integrations', href: '/' },
  ]

  const resourcesLinks = [
    { label: 'Blog', href: '/' },
    { label: 'Documentation', href: '/' },
    { label: 'Help Center', href: '/' },
    { label: 'Contact Us', href: '/' },
  ]

  const handleDropdownLinkClick = () => {
    setOpenMenu(null)
  }

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false)
    setOpenMenu(null)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="relative mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-4">
        <Link href="/" className="flex h-8 items-center" aria-label="Supervisor home">
          <img
            src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
            alt="Supervise and Run your business with Artificial Intelligence | Supervisor"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          <Link
            href="/"
            className="inline-flex h-11 items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === 'Product' ? null : 'Product')}
              className="inline-flex items-center h-11 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              aria-expanded={openMenu === 'Product'}
            >
              Product
              <ChevronDown
                className={`ml-1 h-3 w-3 transition-transform duration-300 ${
                  openMenu === 'Product' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openMenu === 'Product' && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                {productLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={handleDropdownLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/use-cases"
            className="inline-flex h-11 items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            Use Cases
          </Link>

          <Link
            href="/for"
            className="inline-flex h-11 items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            Industries
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === 'Resources' ? null : 'Resources')}
              className="inline-flex items-center h-11 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              aria-expanded={openMenu === 'Resources'}
            >
              Resources
              <ChevronDown
                className={`ml-1 h-3 w-3 transition-transform duration-300 ${
                  openMenu === 'Resources' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openMenu === 'Resources' && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={handleDropdownLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className="inline-flex h-11 items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center px-4 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center p-2 text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-50 overflow-y-auto">
          <nav className="flex flex-col p-4" aria-label="Mobile navigation">
            <Link
              href="/"
              className="py-3 text-base font-medium text-gray-900 border-b border-gray-100"
              onClick={handleMobileLinkClick}
            >
              Home
            </Link>

            <div className="border-b border-gray-100">
              <button
                onClick={() => setOpenMenu(openMenu === 'MobileProduct' ? null : 'MobileProduct')}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-900"
              >
                Product
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openMenu === 'MobileProduct' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMenu === 'MobileProduct' && (
                <div className="pb-3 pl-4">
                  {productLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                      onClick={handleMobileLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/use-cases"
              className="py-3 text-base font-medium text-gray-900 border-b border-gray-100"
              onClick={handleMobileLinkClick}
            >
              Use Cases
            </Link>

            <Link
              href="/for"
              className="py-3 text-base font-medium text-gray-900 border-b border-gray-100"
              onClick={handleMobileLinkClick}
            >
              Industries
            </Link>

            <div className="border-b border-gray-100">
              <button
                onClick={() => setOpenMenu(openMenu === 'MobileResources' ? null : 'MobileResources')}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-900"
              >
                Resources
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openMenu === 'MobileResources' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMenu === 'MobileResources' && (
                <div className="pb-3 pl-4">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                      onClick={handleMobileLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="py-3 text-base font-medium text-gray-900 border-b border-gray-100"
              onClick={handleMobileLinkClick}
            >
              Pricing
            </Link>

            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center text-base font-medium text-gray-900"
                onClick={handleMobileLinkClick}
              >
                Log in
              </Link>
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 text-base font-medium text-white"
                onClick={handleMobileLinkClick}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}