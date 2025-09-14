import { Story } from "@/types";
import { Badge, Box, Button, Card, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { LuBot } from "react-icons/lu";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
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
    <Card.Root
      bg="bg.glass"
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor="ui.primary/20"
      shadow={'primary'}
      _hover={{ scale: 1.05, shadow: 'glow' }}
      transition="all 0.2s"
      cursor="pointer"
    >
      <Card.Header>
        <Flex justify="space-between" align="start">
          <Box flex={1}>
            <Card.Title fontSize={'lg'} mb={2} _groupHover={{ color: 'ui.primary' }} transition={'colors'}>{story.title}</Card.Title>
            <Card.Description fontSize={'sm'} color="ui.mutedForeground">
              {story.description}
            </Card.Description>
          </Box>
          <Badge colorScheme={getStatusColor(story.status)} ml={2}>
            {story.status}
          </Badge>
        </Flex>
      </Card.Header>

      <Card.Body>
        <Stack gap={3}>
          <Flex justify="space-between" align="center">
            <Badge
              variant="outline"
              colorScheme={getScenarioColor(story.scenario)}
            >
              {story.scenario}
            </Badge>
            <Text as='span' textStyle={'xs'} color="ui.mutedForeground">
              {story.lastPlayed}
            </Text>
          </Flex>

          <HStack gap={2}>
            <Icon as={LuBot} w={4} h={4} color="ui.primary" />
            <Text textStyle={'sm'} color="ui.mutedForeground">Playing as:</Text>
            <Text textStyle={'sm'} fontWeight="medium">{story.aiCharacter}</Text>
          </HStack>

          <Button variant="outline" w="full" borderColor="ui.primary/30" border='1px solid' _hover={{ bg: 'ui.primary/10' }}>
            Continue Story
          </Button>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}
