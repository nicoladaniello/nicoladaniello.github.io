import React from "react"
import { motion } from "framer-motion"

const Anim = () => {
  return (
    <div
      className="position-relative m-auto"
      style={{ width: "150px", height: "150px" }}
    >
      <motion.div
        className="bg-dark position-absolute"
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "7px",
        }}
        animate={{
          scale: [1, 1.85, 1.85, 1],
          originX: 0,
          originY: 0,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.333, 0.666, 1],
          loop: Infinity,
          repeatDelay: 3,
        }}
      />
      {[1, 2, 3, 4].map(i => {
        const tx = [10, 10, 10, 10]
        const ty = [10, 10, 10, 10]

        tx[1] = tx[2] = i == 1 || i == 3 ? 70 : 10
        ty[1] = ty[2] = i == 2 || i == 3 ? 70 : 10

        return (
          <motion.div
            className="position-absolute bg-light"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "7px",
            }}
            animate={{
              rotate: [0, 90, 90, 0],
              translateX: tx,
              translateY: ty,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.333, 0.666, 1],
              loop: Infinity,
              repeatDelay: 3,
            }}
          ></motion.div>
        )
      })}
    </div>
  )
}

export default Anim
