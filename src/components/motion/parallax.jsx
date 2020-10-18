import React, { useRef, useState, useLayoutEffect } from "react"
import {
  useViewportScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion"
import useWindowSize from "../../utils/useWindowSize"

const Parallax = ({ children }) => {
  const ref = useRef()
  const { scrollY } = useViewportScroll()
  const { height: windowHeight } = useWindowSize()
  const [offsetTop, setOffsetTop] = useState(0)

  useLayoutEffect(() => {
    if (!ref.current) return null
    setOffsetTop(ref.current.offsetTop)
  }, [ref])

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - windowHeight, offsetTop + windowHeight],
      ["50%", "-50%"]
    ),
    { stiffness: 100, damping: 300 }
  )

  return (
    <motion.div ref={ref} initial={{ y: "50%" }} style={{ y }}>
      {children}
    </motion.div>
  )
}

export default Parallax
