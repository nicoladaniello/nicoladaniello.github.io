import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { Card } from "react-bootstrap"
import Figure from "./figure"

const FigureScene = ({ images, bounds, scrollProgress, ...rest }) => {
  // doesn't work with SSR;
  if (typeof window === "undefined") return null

  const perspective = 800
  const fov = (180 * (2 * Math.atan(bounds.height / 2 / perspective))) / Math.PI
  const aspect = window.innerWidth / window.innerHeight
  const camera = {
    fov,
    aspect,
    near: 1,
    far: 1000,
    position: [0, 0, perspective],
  }

  return (
    <Card {...rest}>
      <img className="img-fluid" alt={images[0].alt} src={images[0].src} />
      <Card.ImgOverlay className="p-0">
        <Canvas camera={camera}>
          <ambientLight />
          <Suspense fallback={null}>
            <Figure
              images={images}
              bounds={bounds}
              scrollProgress={scrollProgress}
            />
          </Suspense>
        </Canvas>
      </Card.ImgOverlay>
    </Card>
  )
}

export default FigureScene
