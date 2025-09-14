import { Box, Flex, HStack, Icon, VStack, Container, Heading, Text } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"


import { LuBot } from "react-icons/lu"
import { FiLogOut, FiSettings } from "react-icons/fi"
import useAuth from "@/hooks/useAuth"
import { Link } from "@tanstack/react-router"

function Navbar() {
  const { user: currentUser, logout } = useAuth()

  return (
    <Box
      as={'header'}
      bg={'bg.card/50'}
      borderBottom="1px solid"
      borderColor="border/50"
      position="sticky"
      backdropBlur={'sm'}
      top={0}
      zIndex={10}
    >
      <Container maxW="container.xl" p={4}>
        <Flex justify="space-between" align="center">
          <Link to="/">
            <HStack gap={3}>
              <Box
                p={2}
                rounded="lg"
                bgColor="ui.primary/20"
              >
                <Icon as={LuBot} width={6} height={6} color="ui.primary" />
              </Box>
              <VStack align="start" gap={0}>
                <Heading as={'h1'} size="xl">AI Roleplay Dashboard</Heading>
                <Text fontSize="sm" color="ui.mutedForeground">
                  Welcome back, {currentUser?.full_name || currentUser?.email}!
                </Text>
              </VStack>
            </HStack>
          </Link>

          <HStack gap={2}>
            <Link to="/settings">
              <Button variant="ghost" size="sm">
                <Icon as={FiSettings} w={4} h={4} mr={2} />
                Settings
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
            >
              <Icon as={FiLogOut} w={4} h={4} mr={2} />
              Logout
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
