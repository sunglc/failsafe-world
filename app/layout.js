import './globals.css'

export const metadata = {
  title: 'Failsafe — Identity Resilience for the Agent Era',
  description: 'Monitor every credential your agents and identity depend on. Map the blast radius. Auto-failover when tokens break. Your agents and your digital life — always on.',
  openGraph: {
    title: 'Failsafe — Identity Resilience for the Agent Era',
    description: 'One token fails. Your entire stack goes dark. Failsafe monitors credentials, maps dependencies, and auto-recovers — for agents and humans.',
    url: 'https://failsafe.world',
    siteName: 'Failsafe',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Failsafe — Identity Resilience for the Agent Era',
    description: 'One token fails. Your entire stack goes dark. Failsafe monitors credentials, maps dependencies, and auto-recovers.',
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
