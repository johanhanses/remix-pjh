import type { ReactNode } from 'react'
import { Header } from './header'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-petrona max-w-3xl mx-auto px-8 lg:px-0 min-h-screen">
      <Header />
      <main className="min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-5rem)] flex pt-48 md:pt-0 md:items-center justify-end">
        {children}
      </main>
    </div>
  )
}
