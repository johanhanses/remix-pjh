import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'PJH' }]
}

export default function Index() {
  return (
    <main className="min-h-screen bg-neutral-500 text-white antialiased text-lg font-mono flex justify-center items-center">
      <header>
        <h1>Welcome to PJH face</h1>
      </header>
    </main>
  )
}
