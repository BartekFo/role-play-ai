import { Box, Card, Center, Heading, Icon, Input, Text } from "@chakra-ui/react"
import {
  createFileRoute,
  Link as RouterLink,
  redirect,
} from "@tanstack/react-router"
import { type SubmitHandler, useForm } from "react-hook-form"
import { FiLock, FiMail } from "react-icons/fi"
import { LuBot } from "react-icons/lu"
import type { Body_login_login_access_token as AccessToken } from "@/client"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import { PasswordInput } from "@/components/ui/password-input"
import useAuth, { isLoggedIn } from "@/hooks/useAuth"
import BgImage from "/assets/images/login-background.png"
import { emailPattern, passwordRules } from "../utils"

export const Route = createFileRoute("/login")({
  component: Login,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      })
    }
  },
})

function Login() {
  const { loginMutation, error, resetError } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccessToken>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<AccessToken> = async (data) => {
    if (isSubmitting) return

    resetError()

    try {
      await loginMutation.mutateAsync(data)
    } catch {
      // error is handled by useAuth hook
    }
  }

  return (
    <Center
      h="100vh"
      p={0}
      bgImage={`url(${BgImage})`}
      bgSize="cover"
      m={0}
      maxW="100%"
      bgRepeat="no-repeat"
    >
      <Box pos="absolute" inset={0} pointerEvents="none">
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            pos="absolute"
            left={`${Math.random() * 100}%`}
            top={`${Math.random() * 100}%`}
            w={2}
            h={2}
            bgColor="ui.main/30"
            rounded="full"
            animationStyle="float"
          />
        ))}
      </Box>
      <Card.Root
        bgColor={"bg"}
        p={16}
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        h="fit-content"
        width={"lg"}
        alignItems="stretch"
        justifyContent="center"
        gap={4}
      >
        <Card.Header
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={0}
        >
          <Box
            mb={4}
            p={4}
            rounded="full"
            bgColor="ui.main/20"
            backdropBlur="sm"
            width="max-content"
          >
            <Icon width={8} height={8} color="ui.main">
              <LuBot />
            </Icon>
          </Box>
          <Card.Title>
            <Heading color={"ui.main"} size="3xl">
              Roleplay AI
            </Heading>
          </Card.Title>
          <Card.Description>
            <Text>Enter the world of limitless possibilities</Text>
          </Card.Description>
        </Card.Header>

        <Field
          invalid={!!errors.username}
          errorText={errors.username?.message || !!error}
        >
          <InputGroup w="100%" startElement={<FiMail />}>
            <Input
              {...register("username", {
                required: "Username is required",
                pattern: emailPattern,
              })}
              placeholder="Email"
              type="email"
            />
          </InputGroup>
        </Field>
        <PasswordInput
          type="password"
          startElement={<FiLock />}
          {...register("password", passwordRules())}
          placeholder="Password"
          errors={errors}
        />
        <Button variant="solid" type="submit" loading={isSubmitting} size="md">
          Log In
        </Button>
        <Text>
          Don't have an account?{" "}
          <RouterLink to="/signup" className="main-link">
            Sign Up
          </RouterLink>
        </Text>
      </Card.Root>
    </Center>
  )
}
