import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Best Headsets - Bass & Sound Quality',
  description: 'Find the best headsets with exceptional bass and sound quality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
