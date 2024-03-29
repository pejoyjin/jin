import './globals.css'

export const metadata = {
  title: 'Jin',
  description: 'Jin web',
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
