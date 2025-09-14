import { Box, Button, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { StoryCard } from "./StoryCard";
import { Stories } from "@/types";
import { LuBot, LuPlus } from "react-icons/lu";


interface StoriesCardsProps {
  stories: Stories;
}
export function StoriesCards({ stories }: StoriesCardsProps) {


  if (stories.length === 0) {
    return (
      <Box py={12} textAlign="center">
        <Icon as={LuBot} w={16} h={16} mx='auto' mb={4} color="ui.mutedForeground" />
        <Heading as='h3' size="lg" mb={2}>No stories yet</Heading>
        <Text color="ui.mutedForeground" mb={6}>
          Create your first AI roleplay adventure to get started
        </Text>
        <Button>
          <Icon as={LuPlus} w={4} h={4} />
          Create Your First Story
        </Button>
      </Box>
    )
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </SimpleGrid>
  )
}
