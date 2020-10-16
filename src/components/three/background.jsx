import React from "react"
import { Canvas } from "react-three-fiber"
import Box from "./box"
import Controls from "./controls"

const Background = props => {
  return (
    <Canvas {...props}>
      <ambientLight color="#bbb" />
      <pointLight position={[-10, 10, 10]} intensity={0.2} />
      <pointLight position={[10, 0, 10]} intensity={0.2} />
      <Box position={[0, 0, 0]} rotation={[-1.1, -1, 0]} />
      <Controls />
    </Canvas>
  )
}

export default Background
