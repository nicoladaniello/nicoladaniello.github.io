import React, { useRef, useState, useLayoutEffect } from "react"
import { Container, Col, Row } from "react-bootstrap"
import {
  useViewportScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion"
import Image from "../../images/image.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import useWindowSize from "../../utils/useWindowSize"

const Lorem = () => {
  const ref = useRef()
  const { scrollY } = useViewportScroll()
  const { height: windowHeight } = useWindowSize()
  const [offsetTop, setOffsetTop] = useState(0)

  useLayoutEffect(() => {
    if (!ref.current) return null
    setOffsetTop(ref.current.offsetTop)
  }, [ref])

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - windowHeight, offsetTop + windowHeight],
      ["50%", "-50%"]
    ),
    { stiffness: 100, damping: 300 }
  )

  const y2 = useSpring(
    useTransform(
      scrollY,
      [offsetTop - windowHeight, offsetTop + windowHeight],
      ["25%", "-25%"]
    ),
    { stiffness: 100, damping: 300 }
  )

  const maxHeight = useSpring(
    useTransform(
      scrollY,
      [offsetTop - windowHeight / 2, offsetTop + windowHeight],
      ["100vh", "50vh"]
    ),
    { stiffness: 100, damping: 300 }
  )

  return (
    <motion.div
      className="jumobtron bg-primary inner-shadow text-white"
      ref={ref}
      initial={{ y: "50%", maxHeight: "100vh" }}
      style={{ y, maxHeight, overflow: "hidden" }}
    >
      <motion.div initial={{ y: "25" }} style={{ y: y2 }}>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg="6" className="pt-lg-5">
              <h2 className="display-4 font-weight-bold">
                Professional Websites & Web Apps
              </h2>
              <p>
                I develop modern websites and web applications with the use of
                the latest technologies.
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/nicoladaniello/"
                  className="btn btn-link"
                >
                  View my LinkedIn <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </p>
            </Col>
            <Col lg="6">
              <img
                className="img-fluid shadow"
                style={{ transform: "translate(0, -10%, 0)" }}
                alt="Professional Website"
                src={Image}
              />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </motion.div>
  )
}

export default Lorem
