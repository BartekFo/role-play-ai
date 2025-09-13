import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import {
  FiBook,
  FiCalendar,
  FiLogOut,
  FiPlus,
  FiSettings,
  FiUser,
} from "react-icons/fi"
import { LuBot } from "react-icons/lu"

import useAuth from "@/hooks/useAuth"
import { useColorModeValue } from "@/components/ui/color-mode"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})

const mockStories = [
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
  const { user: currentUser, logout } = useAuth()
  const [stories] = useState(mockStories)

  const cardBg = useColorModeValue("white", "gray.800")
  const statsBg = useColorModeValue("gray.50", "gray.700")

  const getStatusColor = (status: string) => {
    return status === "Active" ? "green" : "gray"
  }

  const getScenarioColor = (scenario: string) => {
    const colors = {
      Fantasy: "purple",
      "Sci-Fi": "blue",
      Mystery: "orange",
    }
    return colors[scenario as keyof typeof colors] || "gray"
  }

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
      {/* Header */}
      <Box
        bg={cardBg}
        borderBottomWidth={1}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" py={4}>
            <HStack gap={3}>
              <Box p={2} bg="blue.100" borderRadius="lg">
                <Icon as={LuBot} w={6} h={6} color="blue.600" />
              </Box>
              <VStack align="start" gap={0}>
                <Heading size="lg">AI Roleplay Dashboard</Heading>
                <Text fontSize="sm" color="gray.500">
                  Welcome back, {currentUser?.full_name || currentUser?.email}!
                </Text>
              </VStack>
            </HStack>

            <HStack gap={2}>
              <Button variant="ghost" size="sm">
                <FiSettings />
                Settings
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
              >
                <FiLogOut />
                Logout
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        {/* Stats Section */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mb={8}>
          <Card.Root bg={statsBg}>
            <Card.Body>
              <Flex justify="space-between" align="center">
                <VStack align="start" gap={1}>
                  <Text fontSize="sm" color="gray.500" fontWeight="medium">
                    Total Stories
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    {stories.length}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Active adventures
                  </Text>
                </VStack>
                <Icon as={FiBook} w={5} h={5} color="gray.500" />
              </Flex>
            </Card.Body>
          </Card.Root>

          <Card.Root bg={statsBg}>
            <Card.Body>
              <Flex justify="space-between" align="center">
                <VStack align="start" gap={1}>
                  <Text fontSize="sm" color="gray.500" fontWeight="medium">
                    Active Now
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    {stories.filter((s) => s.status === "Active").length}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Active stories
                  </Text>
                </VStack>
                <Icon as={FiUser} w={5} h={5} color="gray.500" />
              </Flex>
            </Card.Body>
          </Card.Root>

          <Card.Root bg={statsBg}>
            <Card.Body>
              <Flex justify="space-between" align="center">
                <VStack align="start" gap={1}>
                  <Text fontSize="sm" color="gray.500" fontWeight="medium">
                    Last Played
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    2h
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Hours ago
                  </Text>
                </VStack>
                <Icon as={FiCalendar} w={5} h={5} color="gray.500" />
              </Flex>
            </Card.Body>
          </Card.Root>
        </SimpleGrid>

        {/* Stories Section */}
        <Flex justify="space-between" align="center" mb={6}>
          <VStack align="start" gap={1}>
            <Heading size="lg">Your Roleplay Stories</Heading>
            <Text color="gray.500">
              Continue your adventures or start a new one
            </Text>
          </VStack>

          <Button colorScheme="blue" size="lg">
            <FiPlus />
            Create New Story
          </Button>
        </Flex>

        {/* Stories Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {stories.map((story) => (
            <Card.Root
              key={story.id}
              bg={cardBg}
              shadow="md"
              _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
              transition="all 0.2s"
              cursor="pointer"
            >
              <Card.Header pb={3}>
                <Flex justify="space-between" align="start">
                  <VStack align="start" gap={2} flex={1}>
                    <Card.Title noOfLines={2}>{story.title}</Card.Title>
                    <Card.Description noOfLines={3}>
                      {story.description}
                    </Card.Description>
                  </VStack>
                  <Badge colorScheme={getStatusColor(story.status)} ml={2}>
                    {story.status}
                  </Badge>
                </Flex>
              </Card.Header>

              <Card.Body pt={0}>
                <Stack gap={3}>
                  <Flex justify="space-between" align="center">
                    <Badge
                      variant="outline"
                      colorScheme={getScenarioColor(story.scenario)}
                    >
                      {story.scenario}
                    </Badge>
                    <Text fontSize="xs" color="gray.500">
                      {story.lastPlayed}
                    </Text>
                  </Flex>

                  <HStack gap={2} fontSize="sm">
                    <Icon as={LuBot} w={4} h={4} color="blue.500" />
                    <Text color="gray.500">Playing as:</Text>
                    <Text fontWeight="medium">{story.aiCharacter}</Text>
                  </HStack>

                  <Button variant="outline" size="sm" w="full" mt={2}>
                    Continue Story
                  </Button>
                </Stack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>

        {/* Empty State */}
        {stories.length === 0 && (
          <VStack gap={6} py={12} textAlign="center">
            <Icon as={LuBot} w={16} h={16} color="gray.400" />
            <VStack gap={2}>
              <Heading size="md">No stories yet</Heading>
              <Text color="gray.500">
                Create your first AI roleplay adventure to get started
              </Text>
            </VStack>
            <Button colorScheme="blue" size="lg">
              <FiPlus />
              Create Your First Story
            </Button>
          </VStack>
        )}
      </Container>
    </Box>
  )
}
