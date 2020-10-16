import * as React from "react"
import { motion } from "framer-motion"

const AnimateTitle = ({ lines, fontSizePx, className }) => {
  return (
    <div style={{ fontSize: `${fontSizePx}px` }} className={className}>
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            height: `${fontSizePx * 1.4}px`,
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              fontSize: `${fontSizePx}px`,
              overflow: "hidden",
            }}
            initial={{ y: -(fontSizePx * 1.4) }}
            animate={{ y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
              delay: 0.5 + i * 0.2,
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default AnimateTitle
