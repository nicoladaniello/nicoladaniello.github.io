import PropTypes from "prop-types"
import React, { useRef } from "react"
import { useFrame } from "react-three-fiber"
import useWindowSize from "../../utils/useWindowSize"
import useMousePosition from "../../utils/useMousePosition"
import { useSpring, useTransform, useViewportScroll } from "framer-motion"

const Box = ({ position, rotation, ...rest }) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const { width, height } = useWindowSize()
  const { posX, posY } = useMousePosition()
  const { scrollY } = useViewportScroll()

  const mouseXSpring = useSpring(useTransform(posX, [0, width], [-1, 1]), {
    stiffness: 50,
    damping: 100,
  })
  const mouseYSpring = useSpring(useTransform(posY, [0, height], [-1, 1]), {
    stiffness: 50,
    damping: 100,
  })
  const scrollYSpring = useSpring(useTransform(scrollY, [0, height], [0, 2]), {
    stiffness: 50,
    damping: 100,
  })

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = rotation[0] + mouseYSpring.get() * 0.2
    mesh.current.rotation.y = rotation[1] + mouseXSpring.get() * 0.4
    mesh.current.rotation.x += scrollYSpring.get()
    mesh.current.rotation.y += scrollYSpring.get()
    mesh.current.position.y = scrollYSpring.get()
  })

  return (
    <mesh position={position} rotation={rotation} {...rest} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" color="#fff" />
    </mesh>
  )
}

Box.propTypes = {
  position: PropTypes.array,
  rotation: PropTypes.array,
}

Box.defaultProps = {
  position: [0, 0, 0],
  rotation: [0, 0, 0],
}

export default Box
