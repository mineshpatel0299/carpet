import type { Metadata } from 'next'
import { Playfair_Display, Raleway } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/ui/smooth-scroll'

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const raleway = Raleway({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Creaticabud Carpets — India\'s Finest Hand-Knotted Carpets',
  description:
    'Manufacturer & exporter of handmade carpets, silk rugs, and handloom textiles since 1998. Supplying to 48 countries with ethical, artisan craftsmanship.',
  openGraph: {
    title: 'Creaticabud Carpets — India\'s Finest Hand-Knotted Carpets',
    description:
      'Manufacturer & exporter of handmade carpets, silk rugs, and handloom textiles since 1998.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
