import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Inter, Roboto } from 'next/font/google'
import { Quicksand } from 'next/font/google'
import { SplashScreenProvider } from '@/components/splash-screen-provider'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' })
const roboto = Roboto({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-roboto' })

const fontClassName = `${geist.variable} ${inter.variable} ${quicksand.variable} ${roboto.variable}`

export const metadata: Metadata = {
  title: 'Omkar Electricals - Professional Electrical Services',
  description: 'Omkar Electricals provides professional electrical contracting services including residential wiring, industrial installation, government and electrical maintenance.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf7f2' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${fontClassName}`}>
      <body className="antialiased">
        <SplashScreenProvider>
          {children}
        </SplashScreenProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
