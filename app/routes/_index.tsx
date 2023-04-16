import type { V2_MetaFunction } from '@remix-run/node'
import { Contact } from '~/components/contact'

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

export default function Index() {
  return (
    <main className="font-petrona max-w-3xl mx-auto px-6 lg:px-0 min-h-screen flex pt-48 md:pt-0 md:items-center justify-end">
      <header>
        <h1 className="text-4xl mb-6">Johan Hanses</h1>
        <Contact />
      </header>
    </main>
  )
}
