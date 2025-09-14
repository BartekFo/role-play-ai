import { Card, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface DataCardProps {
  title: string;
  value: number;
  description: string;
  icon: IconType;
}

export function DataCard({ title, value, description, icon }: DataCardProps) {
  return (
    <Card.Root borderRadius={'xl'} bg={'bg.card/50'} border="1px solid" borderColor="ui.primary/20">
      <Card.Header display="flex" flexDirection={'row'} justifyContent="space-between" alignItems="center">
        <Card.Title><Text textStyle={'sm'}>{title}</Text></Card.Title>
        <Icon as={icon} w={4} h={4} color="ui.mutedForeground" />
      </Card.Header>
      <Card.Body>
        <Flex justify="space-between" align="center">
          <VStack align="start" gap={1}>
            <Text fontSize="2xl" fontWeight="bold">
              {value}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {description}
            </Text>
          </VStack>
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}
