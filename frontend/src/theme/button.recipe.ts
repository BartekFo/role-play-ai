import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "bold",
    display: "flex",
    borderRadius: "xl",
    alignItems: "center",
    justifyContent: "center",
    colorPalette: "primary",
  },
  variants: {
    variant: {
      ghost: {
        bg: "transparent",
        _hover: {
          bg: "ui.accent",
        },
      },
    },
  },
})
