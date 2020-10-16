import React, { useRef, useState } from "react"
import * as THREE from "three"
import { useFrame, useThree, useLoader } from "react-three-fiber"
import vertexShader from "./vertexShader.vert"
import fragmentShader from "./fragmentShader.frag"

const Figure = ({ images, bounds, scrollProgress, ...rest }) => {
  // doesn't work with SSR;
  if (typeof window === "undefined") return null

  // This reference will give us direct access to the mesh
  const mesh = useRef()

  const [time, setTime] = useState(0)
  useFrame(() => setTime(time + 0.01))

  const url1 = images[0].src
  const url2 = images[1].src

  const [texture1, texture2] = useLoader(THREE.TextureLoader, [url1, url2])

  const { mouse } = useThree()

  // After load -->
  texture1.minFilter = THREE.LinearFilter
  texture2.minFilter = THREE.LinearFilter

  const uniforms = {
    u_image: { type: "t", value: texture1 },
    u_imagehover: { type: "t", value: texture2 },
    u_mouse: { value: mouse },
    u_scroll: { value: scrollProgress },
    u_time: { value: time },
    u_res: { value: new THREE.Vector2(bounds.width, bounds.height) },
  }

  const geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1)
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    defines: {
      PR: window.devicePixelRatio.toFixed(1),
    },
  })

  return (
    <mesh
      {...rest}
      ref={mesh}
      geometry={geometry}
      material={material}
      scale={[bounds.width, bounds.height, 1]}
    />
  )
}

export default Figure
