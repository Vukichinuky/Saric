
import Nav from '@/components/Nav'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Saric DOO',
  description: 'Proizvodnja papirne ambalaze, transport stocne hrane',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className=' font-sans' lang="sr">
      <body>

        <Nav />
        {children}
        <Footer /></body>
    </html>
  )
}
