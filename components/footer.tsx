'use client'

import Link from 'next/link'
import { Share2, Users, MessageSquare } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      {/* Main footer content */}
      <div className="max-w-5xl mx-auto px-4 py-12 font-geist">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-8">
          {/* About section */}
          <div>
            <h3 className="font-medium text-lg mb-4">Omkar Electricals</h3>
            <p className="text-gray-300 text-sm">
              Professional Government electrical contracting services for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-wrap gap-6 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-accent transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-200 text-sm">
            <p>© Omkar Electricals {currentYear}</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
