import type { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="font-petrona max-w-3xl mx-auto px-8 lg:px-0 min-h-screen">{children}</div>
}
