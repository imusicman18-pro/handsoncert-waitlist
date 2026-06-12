import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HandsOnCert — Learn · Build · Prove',
  description:
    'Guided cloud certification platform for Azure, AWS, and GCP. Get your cert badge AND a HandsOnCert-built GitHub portfolio employers can verify. AZ-104 launching first.',
  openGraph: {
    title: 'HandsOnCert — Learn · Build · Prove',
    description:
      'Hands-on cloud projects mapped to real exam objectives across Azure, AWS, and GCP. Your HandsOnCert-built GitHub portfolio proves you did the work.',
    url: 'https://www.handsoncert.com',
    siteName: 'HandsOnCert',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HandsOnCert — Learn · Build · Prove',
    description: 'Get certified AND build a GitHub portfolio employers can verify.',
  },
  verification: {
    google: 'Rz7JBMdk6TFZSDJ_VzeEYaSNX3Zjrk5g5idui8bD4zs',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0F1E] text-[#E2E8F0]`}>{children}</body>
    </html>
  )
}
