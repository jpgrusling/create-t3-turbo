import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { type FC, type PropsWithChildren } from 'react'
import NextLink from 'next/link'

import { Link } from '@local/ui/Link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type RootLayoutProps = PropsWithChildren

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-brandPrimary p-4">
          <Link kind="tertiary" asChild>
            <NextLink href="/">Turborepo Template</NextLink>
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
