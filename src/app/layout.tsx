import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BlazeAt',
  description: 'your Own SaaS App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
    <html lang="en">
    
    <body className={font.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
  </ClerkProvider>
  )
}
