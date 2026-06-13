import './globals.css'

export const metadata = {
  title: 'Next9Accounting — Your Trusted Financial Partner',
  description: 'Accounting is the language of business; every number tells a story. Professional accounting, tax, and financial reporting services in Thailand.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
