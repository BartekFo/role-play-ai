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
      background: "linear-gradient(135deg, hsl(240, 10%, 8%) 0%, hsl(250, 20%, 12%) 50%, hsl(260, 15%, 10%) 100%)",
      minHeight: "100vh",
    },
    ".main-link": {
      color: "ui.primary",
      fontWeight: "bold",
    },
    ".glass-morphism": {
      background: "hsl(240, 10%, 15%, 0.2)",
      border: "1px solid hsl(270, 91%, 65%, 0.2)",
      backdropFilter: "blur(10px)",
    },
  },
  theme: {
    animationStyles,
    tokens: {
      colors: {
        ui: {
          primary: { value: "hsl(270, 91%, 65%)" },
          secondary: { value: "hsl(262, 83%, 58%)" },
          accent: { value: "hsl(250, 100%, 70%)" },
          background: { value: "hsl(240, 10%, 8%)" },
          card: { value: "hsl(240, 10%, 12%)" },
          border: { value: "hsl(240, 6%, 20%)" },
          input: { value: "hsl(240, 6%, 16%)" },
          muted: { value: "hsl(240, 6%, 16%)" },
          mutedForeground: { value: "hsl(240, 5%, 64%)" },
          glass: { value: "hsl(240, 10%, 15%, 0.2)" },
          glassBorder: { value: "hsl(270, 91%, 65%, 0.2)" },
        },
      },
      gradients: {
        primary: { value: "linear-gradient(135deg, hsl(270, 91%, 65%) 0%, hsl(262, 83%, 58%) 50%, hsl(250, 100%, 70%) 100%)" },
        background: { value: "linear-gradient(135deg, hsl(240, 10%, 8%) 0%, hsl(250, 20%, 12%) 50%, hsl(260, 15%, 10%) 100%)" },
        card: { value: "linear-gradient(135deg, hsl(240, 10%, 12%, 0.8) 0%, hsl(250, 15%, 15%, 0.9) 100%)" },
      },
      shadows: {
        primary: { value: "0 10px 30px -10px hsl(270, 91%, 65%, 0.3)" },
        glow: { value: "0 0 40px hsl(270, 91%, 65%, 0.4)" },
      },
      durations: {
        smooth: { value: "0.3s" },
      },
      easings: {
        smooth: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "{colors.ui.background}" },
          card: { value: "{colors.ui.card}" },
          muted: { value: "{colors.ui.muted}" },
          glass: { value: "{colors.ui.glass}" },
        },
        border: {
          DEFAULT: { value: "{colors.ui.border}" },
          glass: { value: "{colors.ui.glassBorder}" },
        },
        primary: {
          DEFAULT: { value: "{colors.ui.primary}" },
          solid: { value: "{colors.ui.primary}" },
        },
        accent: {
          DEFAULT: { value: "{colors.ui.accent}" },
          solid: { value: "{colors.ui.secondary}" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
})
