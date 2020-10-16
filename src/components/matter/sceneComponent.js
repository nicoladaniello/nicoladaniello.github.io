import React, { useRef, useLayoutEffect } from "react"
import Matter, {
  Body,
  Bodies,
  Common,
  Engine,
  Events,
  Mouse,
  Render,
  World,
} from "matter-js"
import MatterAttractors from "matter-attractors"
import { useViewportScroll } from "framer-motion"

const SceneComponent = props => {
  const { scrollY } = useViewportScroll()
  const ref = useRef()

  Matter.use(MatterAttractors)

  useLayoutEffect(() => {
    if (typeof window === undefined) return
    // create an engine
    const engine = Engine.create()

    // create a renderer
    const render = Render.create({
      canvas: ref.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: "rgba(0, 0, 0, 0)",
        wireframes: false,
      },
    })

    // create two boxes and a ground
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      0,
      {
        isStatic: true,
        plugin: {
          // Attractor function - returns a force vector that applies to bodyB
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-5,
                y: (bodyA.position.y - bodyB.position.y) * 1e-5,
              }
            },
          ],
        },
        render: {
          fillStyle: "rgba(0, 0, 0, 0)",
        },
      }
    )

    const mouseBody = Bodies.circle(10, 10, 50, {
      isStatic: true,
      render: { fillStyle: "rgba(0, 0, 0, 0)" },
    })

    World.add(engine.world, [attractiveBody, mouseBody])

    // add some bodies that to be attracted
    for (var i = 0; i < 10; i += 1) {
      const body = Bodies.circle(
        Common.random(0, render.options.width),
        Common.random(-200, -300),
        Common.random(25, 45),
        Common.random() > 0.9 ? Common.random(15, 25) : Common.random(5, 10)
      )

      World.add(engine.world, body)
    }

    engine.world.gravity.scale = 0

    const mouse = Mouse.create(render.canvas)
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel)
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel)

    Events.on(engine, "afterUpdate", function () {
      Body.setPosition(attractiveBody, {
        x: attractiveBody.position.x,
        y: render.options.height / 2 + scrollY.current,
      })

      if (mouse.position.x) {
        Body.translate(mouseBody, {
          x: (mouse.position.x - mouseBody.position.x) * 0.35,
          y: (mouse.position.y - mouseBody.position.y) * 0.35,
        })
      }
    })

    // run the engine
    Engine.run(engine)

    // run the renderer
    Render.run(render)
  })

  return <canvas {...props} ref={ref} />
}

export default SceneComponent
