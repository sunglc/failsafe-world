import './globals.css'

export const metadata = {
  title: 'Failsafe — Your Digital Life Deserves a Backup Plan',
  description: 'Failsafe maps every service tied to your identity, shows you the blast radius of a platform ban, and backs up what matters — so no single company can shut down your life.',
  openGraph: {
    title: 'Failsafe — Your Digital Life Deserves a Backup Plan',
    description: 'Map your digital dependencies. See your blast radius. Back up what matters.',
    url: 'https://failsafe.world',
    siteName: 'Failsafe',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Failsafe — Your Digital Life Deserves a Backup Plan',
    description: 'Map your digital dependencies. See your blast radius. Back up what matters.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
