import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif' 
})

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'], 
  variable: '--font-sans' 
})

export const metadata: Metadata = {
  title: 'Dr. Edward Kahuthia Murimi',
  description: 'Legal Scholar & Human Rights Practitioner.',
  metadataBase: new URL("https://edwardmurimi.com"),
  openGraph: {
    title: "Dr. Edward Kahuthia Murimi | Portfolio",
    description: "Legal Scholar & Human Rights Practitioner",
    url: "https://edwardmurimi.com",
    siteName: "Edward Murimi",
    images: [
      {
        url: "/paps.jpeg", 
        width: 1200,
        height: 630,
        alt: "Dr. Edward Kahuthia Murimi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Edward Kahuthia Murimi",
    description: "Legal Scholar & Human Rights Practitioner",
    images: ["/paps.jpeg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  )
}