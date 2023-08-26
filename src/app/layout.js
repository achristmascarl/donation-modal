import "./globals.css"

export const metadata = {
  title: "donation-modal",
  description: "created by @achristmascarl",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
