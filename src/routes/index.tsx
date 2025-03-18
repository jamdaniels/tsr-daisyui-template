import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../features/landing/components/Hero'
import { Navbar } from '../features/landing/components/Navbar'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}
