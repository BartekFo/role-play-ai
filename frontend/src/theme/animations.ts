import { defineAnimationStyles } from "@chakra-ui/react"

export const animationStyles = defineAnimationStyles({
  float: {
    value: {
      animationName: "float",
      animationDuration: "6s",
      animationTimingFunction: "ease-in-out",
      animationDelay: "0s",
      animationIterationCount: "infinite",
      animationDirection: "normal",
      animationFillMode: "none",
      animationPlayState: "running",
      animationTimeline: "none",
    },
  },
})
