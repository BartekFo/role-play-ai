import { Box, Card, Center, Heading, Icon, Input, Text } from "@chakra-ui/react"
import {
  createFileRoute,
  Link as RouterLink,
  redirect,
} from "@tanstack/react-router"
import { type SubmitHandler, useForm } from "react-hook-form"
import { FiLock, FiMail, FiUser } from "react-icons/fi"
import { LuBot } from "react-icons/lu"

import type { UserRegister } from "@/client"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input-group"
import { PasswordInput } from "@/components/ui/password-input"
import useAuth, { isLoggedIn } from "@/hooks/useAuth"
import { confirmPasswordRules, emailPattern, passwordRules } from "@/utils"
import BgImage from "/assets/images/login-background.png"

export const Route = createFileRoute("/signup")({
  component: SignUp,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      })
    }
  },
})

interface UserRegisterForm extends UserRegister {
  confirm_password: string
}

function SignUp() {
  const { signUpMutation } = useAuth()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<UserRegisterForm>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      full_name: "",
      password: "",
      confirm_password: "",
    },
  })

  const onSubmit: SubmitHandler<UserRegisterForm> = (data) => {
    signUpMutation.mutate(data)
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
              Join Roleplay AI
            </Heading>
          </Card.Title>
          <Card.Description>
            <Text>Create your account and start your journey</Text>
          </Card.Description>
        </Card.Header>

        <Field
          invalid={!!errors.full_name}
          errorText={errors.full_name?.message}
        >
          <InputGroup w="100%" startElement={<FiUser />}>
            <Input
              minLength={3}
              {...register("full_name", {
                required: "Full Name is required",
              })}
              placeholder="Full Name"
              type="text"
            />
          </InputGroup>
        </Field>

        <Field invalid={!!errors.email} errorText={errors.email?.message}>
          <InputGroup w="100%" startElement={<FiMail />}>
            <Input
              {...register("email", {
                required: "Email is required",
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
        <PasswordInput
          type="confirm_password"
          startElement={<FiLock />}
          {...register("confirm_password", confirmPasswordRules(getValues))}
          placeholder="Confirm Password"
          errors={errors}
        />
        <Button variant="solid" type="submit" loading={isSubmitting} size="md">
          Sign Up
        </Button>
        <Text>
          Already have an account?{" "}
          <RouterLink to="/login" className="main-link">
            Log In
          </RouterLink>
        </Text>
      </Card.Root>
    </Center>
  )
}

export default SignUp
