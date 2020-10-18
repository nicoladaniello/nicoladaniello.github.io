import React, { useState, useLayoutEffect } from "react"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import FigureScene from "../three/FigureScene"
import useMeasure from "react-use-measure"
import { useViewportScroll } from "framer-motion"
import useWindowSize from "../../utils/useWindowSize"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Heading from "../motion/heading"

const ShowCase = ({ data }) => {
  const { height: wHeight } = useWindowSize()
  const [rowRef, rowBounds] = useMeasure()
  const [imgRef, imgBounds] = useMeasure()
  const { scrollY } = useViewportScroll()
  const [scroll, setScroll] = useState(0)

  useLayoutEffect(() =>
    scrollY.onChange(value => {
      // Set the % of scroll of the element in the viewport
      const top = (value - rowBounds.top) / (rowBounds.height - wHeight)
      setScroll(top < 0 ? 0 : top > 1 ? 1 : top)
    })
  )

  return (
    <Jumbotron className="bg-transparent">
      <Container fluid>
        <Heading>ShowCase</Heading>

        <Row className="justify-content-around" ref={rowRef}>
          <Col lg="5">
            <div
              className="d-flex align-items-center"
              style={{ height: "100vh", position: "sticky", top: "0" }}
            >
              <div ref={imgRef}>
                <FigureScene
                  images={data.images}
                  bounds={imgBounds}
                  scrollProgress={scroll}
                />
              </div>
            </div>
          </Col>
          <Col lg="6">
            {data.contents.map((c, i) => (
              <div
                key={i}
                className="d-flex align-items-center"
                style={{ height: "100vh" }}
              >
                <div>
                  <h2>{c.title}</h2>
                  <p className="lead">
                    {c.copy}
                    <br />
                    <a href={c.link} className="btn btn-link">
                      {c.cta} <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default ShowCase
