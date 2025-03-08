import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'LawLinkGlobal Sözleşmeler',
    template: '%s | LawLinkGlobal Legal',
  },
  description: 'LawLinkGlobal platformu resmi sözleşmeler dokümantasyonu',
  keywords: ['hukuk', 'avukat', 'dava yönetimi', 'belge yönetimi', 'hukuk yazılımı'],
  authors: [{ name: 'LawLinkGlobal Ekibi' }],
  creator: 'LawLinkGlobal',
  publisher: 'LawLinkGlobal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://legal.lawlinkglobal.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'LawLinkGlobal Legal Framework',
    description: 'LawLinkGlobal platformu resmi sözleşmeler dokümantasyonu',
    url: 'https://legal.lawlinkglobal.com',
    siteName: 'LawLinkGlobal Legal',
    images: [
      {
        url: 'https://legal.lawlinkglobal.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'tr_TR',
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
    card: 'summary_large_image',
    title: 'LawLinkGlobal  Sözleşmeler Dokümantasyonu',
    description: 'LawLinkGlobal platformu resmi sözleşme dokümantasyonu',
    creator: '@lawlinkglobal',
    images: ['https://legal.lawlinkglobal.com/twitter-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: 'https://legal.lawlinkglobal.com/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
} 