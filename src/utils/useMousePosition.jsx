import { useEffect } from "react"
import { useMotionValue } from "framer-motion"

const useMousePosition = () => {
  const posX = useMotionValue(0)
  const posY = useMotionValue(0)

  useEffect(() => {
    if (typeof window === undefined) return

    const setFromEvent = e => {
      posX.set(e.clientX)
      posY.set(e.clientY)
    }

    window.addEventListener("mousemove", setFromEvent)

    return () => {
      window.removeEventListener("mousemove", setFromEvent)
    }
  })

  return { posX, posY }
}

export default useMousePosition
