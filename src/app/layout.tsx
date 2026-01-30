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