'use client'

import Link from 'next/link'
import { Share2, Users, MessageSquare } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12 font-geist">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="font-medium text-lg mb-4">Omkar Electricals</h3>
            <p className="text-gray-300 text-sm">
              Professional Government electrical contracting services for residential, commercial, and industrial projects. Adding light to life since day one.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Social links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-accent transition">
              <Share2 size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-accent transition">
              <Users size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-accent transition">
              <MessageSquare size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© Omkar Electricals {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
