import React from "react"
import useWindowSize from "../../utils/useWindowSize"
import { motion } from "framer-motion"
import { useRef } from "react"

const Marquee = () => {
  const ref = useRef()
  const windowSize = useWindowSize()

  let offset, initial, final

  if (ref.current) {
    offset = (windowSize.width * 0.2).toFixed(2)
    initial = ref.current.width * -0.25 - offset
    final = ref.current.width * -0.5 - offset

    console.log("bounds w: " + ref.current.width)
    console.log("offset: " + offset)
    console.log("initial: " + initial)
    console.log("final: " + final)
  }

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        aria-hidden="true"
        style={{ width: "fit-content", position: "relative", display: "flex" }}
        initial={{ translateX: initial }}
        animate={{ translateX: [initial, final] }}
        transition={{
          duration: 5,
          loop: Infinity,
          ease: "linear",
        }}
      >
        {[1, 2, 3, 4].map((n, i) => (
          <span key={i} style={{ fontSize: "10vw", padding: "0 2vw 0 2vw" }}>
            Showreel
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee
