import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/TopMenu'
import NextAuth, { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import NextAuthProvider from '@/provider/NextAuthProvider'
import ReduxProvider from '@/redux/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaccine Book App',
  description: 'Created by Thanakorn Thaminkaew',
}

export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReduxProvider>
          <NextAuthProvider session={session}>
            <TopMenu />
            {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}