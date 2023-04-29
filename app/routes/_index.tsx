import { Contact } from '~/components/contact'

export default function Index() {
  return (
    <main className="font-petrona max-w-3xl mx-auto px-8 lg:px-0 min-h-screen flex pt-48 md:pt-0 md:items-center justify-end">
      <div>
        <h1 className="text-4xl mb-6">Johan Hanses</h1>
        <Contact />
      </div>
    </main>
  )
}
