
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Notification from './components/Notification'
import Footer from './components/Footer'
import AuthProvider from './components/AuthProvider'
import QueryProvider from './components/QueryProvider'

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
          <QueryProvider>
          <div>
            <Notification/>
            <Navbar/>
            {children}
            <Footer/>
          </div>       
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
