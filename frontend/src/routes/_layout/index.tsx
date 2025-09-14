import {
  Button, Container,
  Flex,
  Heading, Icon, Text,
  VStack
} from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { LuPlus } from "react-icons/lu"

import { DataCards } from "@/modules/dashboard"
import { Stories } from "@/types"
import { StoriesCards } from "@/modules/dashboard/components/StoriesCards"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})


const mockStories: Stories = [
  {
    id: 1,
    title: "Medieval Fantasy Adventure",
    description:
      "A brave knight's quest to save the kingdom from an ancient dragon.",
    status: "Active",
    lastPlayed: "2 hours ago",
    aiCharacter: "Sir Galahad",
    scenario: "Fantasy",
  },
  {
    id: 2,
    title: "Space Station Mystery",
    description:
      "Uncover the truth behind the disappearance of the crew on Station Alpha-7.",
    status: "Completed",
    lastPlayed: "1 day ago",
    aiCharacter: "Commander Nova",
    scenario: "Sci-Fi",
  },
  {
    id: 3,
    title: "Detective Noir",
    description:
      "Solve crimes in 1940s New York as a hard-boiled private investigator.",
    status: "Active",
    lastPlayed: "3 days ago",
    aiCharacter: "Detective Morgan",
    scenario: "Mystery",
  },
]

function Dashboard() {
  const [stories] = useState(mockStories)


  return (
    <Container maxW="container.xl" py={8}>
      <DataCards stories={stories} />
      <Flex justify="space-between" align="center" mb={6}>
        <VStack align="start" gap={1}>
          <Heading as='h2' size="2xl">Your Roleplay Stories</Heading>
          <Text color="ui.mutedForeground">
            Continue your adventures or start a new one
          </Text>
        </VStack>

        <Button color='white' size="lg">
          <Icon as={LuPlus} w={4} h={4} />
          Create New Story
        </Button>
      </Flex>

      <StoriesCards stories={stories} />

    </Container>
  )
}
