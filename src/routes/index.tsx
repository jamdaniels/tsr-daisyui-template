import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../features/landing/components/Hero'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Hero />
    </div>
  )
}
