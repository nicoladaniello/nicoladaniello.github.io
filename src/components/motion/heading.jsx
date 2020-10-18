import React, { useEffect, useState } from "react"
import { useViewportScroll } from "framer-motion"
import useWindowSize from "../../utils/useWindowSize"
import useMeasure from "react-use-measure"
import classnames from "classnames"

const Heading = ({ className, children }) => {
  const [ref, bounds] = useMeasure()
  const { height: windowHeight } = useWindowSize()
  const { scrollY } = useViewportScroll()
  const [isActive, setActive] = useState(0)

  useEffect(() => {
    // Toggle active when the heading is above or below the center of the window
    scrollY.onChange(pos => setActive(pos >= bounds.top - windowHeight / 2))
  })

  return (
    <h2
      ref={ref}
      className={classnames(["display-4 font-weight-bold", className])}
    >
      <span className={isActive ? "text-stroke-reverse" : "text-stroke"}>
        {children}
      </span>
    </h2>
  )
}

export default Heading
