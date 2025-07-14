'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CgMenuLeftAlt, CgMenuRightAlt } from "react-icons/cg"

const Nav = () => {
  const pathname = usePathname()
  const isActive = (path) => pathname === path
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Main Nav */}
      <section className="fixed top-4 left-0 w-full z-[100]">
        <div className="px-4 md:px-8 bg-[#F2F3F4] shadow-lg border-white border-3 rounded-2xl max-w-[95vw] mx-auto">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/home">
              <div className="w-28 md:w-40">
                <Image
                  src="/images/logo.png"
                  width={400}
                  height={400}
                  className="h-auto w-full"
                  alt="Logo"
                />
              </div>
            </Link>

            {/* Desktop/Tablet Links */}
            <div className="hidden md:flex space-x-4 lg:space-x-6 text-gray-800 font-semibold text-sm lg:text-base">
              <Link href="/features" className={isActive('/features') ? 'text-blue-700' : 'hover:text-blue-700'}>Features</Link>
              <Link href="/pricing" className={isActive('/pricing') ? 'text-blue-700' : 'hover:text-blue-700'}>Pricing</Link>
              <Link href="/how-it-works" className={isActive('/how-it-works') ? 'text-blue-700' : 'hover:text-blue-700'}>How It Works</Link>
              <Link href="/blog" className={isActive('/blog') ? 'text-blue-700' : 'hover:text-blue-700'}>Blog</Link>
              <Link href="/faq" className={isActive('/faq') ? 'text-blue-700' : 'hover:text-blue-700'}>FAQ</Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="h-fit w-fit bg-gray-900 px-4 py-2 rounded-full hover:shadow-md">
                <p className="text-white font-semibold text-sm lg:text-base">How it works</p>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-800 p-2"
              >
                <CgMenuLeftAlt size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[99]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[50%] max-w-xs bg-white shadow-lg z-[100] p-6 transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileMenuOpen(false)}>
            <CgMenuRightAlt size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-4 text-gray-800 font-medium text-base">
          <Link href="/features" className={isActive('/features') ? 'text-blue-700' : 'hover:text-blue-700'} onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link href="/pricing" className={isActive('/pricing') ? 'text-blue-700' : 'hover:text-blue-700'} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/how-it-works" className={isActive('/how-it-works') ? 'text-blue-700' : 'hover:text-blue-700'} onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
          <Link href="/blog" className={isActive('/blog') ? 'text-blue-700' : 'hover:text-blue-700'} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link href="/faq" className={isActive('/faq') ? 'text-blue-700' : 'hover:text-blue-700'} onClick={() => setMobileMenuOpen(false)}>FAQ</Link>

          {/* Optional: CTA Button in Mobile Menu */}
          <button className="mt-4 bg-gray-900 px-4 py-2 rounded-full text-white text-left w-fit" onClick={() => setMobileMenuOpen(false)}>
            How it works
          </button>
        </nav>
      </div>
    </>
  )
}

export default Nav
