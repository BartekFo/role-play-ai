import { createSystem, defaultConfig } from "@chakra-ui/react"
import { animationStyles } from "./theme/animations"
import { buttonRecipe } from "./theme/button.recipe"

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      fontSize: "16px",
    },
    body: {
      fontSize: "0.875rem",
      margin: 0,
      padding: 0,
    },
    ".main-link": {
      color: "ui.main",
      fontWeight: "bold",
    },
  },
  theme: {
    animationStyles,
    tokens: {
      colors: {
        ui: {
          main: { value: "#a655f7" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
})
