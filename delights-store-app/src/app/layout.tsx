import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Notification from './components/Notification'
import Footer from './components/Footer'
import AuthProvider from './components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Delight Store',
  description: 'Something Delicious',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AuthProvider>
          <div>
            <Notification/>
            <Navbar/>
            {children}
            <Footer/>
          </div>       
        </AuthProvider>
      </body>
    </html>
  )
}
