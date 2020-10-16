import React, { useState, useEffect } from "react"
import { Jumbotron, Row, Col, Container } from "react-bootstrap"
import { Link } from "gatsby"
import { motion, useViewportScroll } from "framer-motion"
import useWindowSize from "../utils/useWindowSize"
import useMeasure from "react-use-measure"

const Footer = () => {
  const { height: wHeight } = useWindowSize()
  const [ref, bounds] = useMeasure()
  const { scrollY } = useViewportScroll()
  const [scroll, setScroll] = useState(0)

  useEffect(() =>
    scrollY.onChange(value => {
      // Set the % of scroll of the element in the viewport
      const top = (value + wHeight - bounds.top) / bounds.height
      setScroll(top < 0 ? 0 : top > 1 ? 1 : top)
    })
  )

  return (
    <Container>
      <Jumbotron fluid className="position-relative bg-transparent">
        <motion.div
          className="bg-primary"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
          }}
          initial={{ scaleX: 1.3, scaleY: 1.2 }}
          animate={{ scaleX: 1.3 - scroll * 0.3, scaleY: 1.2 - scroll * 0.2 }}
          transition={{ duration: 1.4 }}
          ref={ref}
        />
        <Row className="justify-content-center text-center">
          <Col lg="auto">
            <Link className="btn btn-link text-light" to="/">
              GitHub
            </Link>
          </Col>
          <Col lg="auto">
            <Link className="btn btn-link text-light" to="/">
              LinkedIn
            </Link>
          </Col>
          <Col lg="auto">
            <Link className="btn btn-link text-light" to="/">
              Email
            </Link>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  )
}

export default Footer
