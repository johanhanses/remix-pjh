import { Contact } from '~/components/contact'

const name = 'Johan Hanses'

export default function Index() {
  return (
    <div>
      <h1 className="text-4xl mb-6">{name}</h1>
      <Contact />
    </div>
  )
}
