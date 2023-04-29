import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { Analytics } from '@vercel/analytics/react'
import { Header } from './components/header'
import { Layout } from './components/layout'
import { ThemeProvider, useTheme } from './components/theme-provider'
import styles from './style.css'

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/favicon.svg',
    type: 'image/svg',
  },
  { rel: 'stylesheet', href: styles },
]

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Johan Hanses',
    },
    {
      name: 'description',
      content: 'TypeScript, React, Frontend developer based in Falun, Sweden.',
    },
  ]
}

const App = () => {
  const [theme] = useTheme()

  return (
    <html lang="en" className={theme ?? ''}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white antialiased min-h-screen">
        <Analytics />
        <Layout>
          <Header />
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
