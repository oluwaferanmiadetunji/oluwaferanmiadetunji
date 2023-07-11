import '../global.css'
import { Inter } from '@next/font/google'
import LocalFont from '@next/font/local'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'oluwaferanmiadetunji.com',
    template: '%s | oluwaferanmiadetunji.com',
  },
  description: 'Software engineer',
  openGraph: {
    title: 'oluwaferanmiadetunji.com',
    description:
      'Software engineer ',
    url: 'https://oluwaferanmiadetunji.com',
    siteName: 'oluwaferanmiadetunji.com',
   
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: '0xwyz',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
}
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  )
}
