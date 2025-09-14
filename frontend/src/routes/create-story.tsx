import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create-story')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/create-story"!</div>
}
