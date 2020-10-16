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

const Lorem = () => {
  const ref = useRef()
  const { scrollY } = useViewportScroll()
  const [offsetTop, setOffsetTop] = useState(0)

  useLayoutEffect(() => {
    if (!ref.current) return null
    setOffsetTop(ref.current.offsetTop)
  }, [ref])

  const y = useSpring(
    useTransform(scrollY, [offsetTop - 600, offsetTop + 600], ["25%", "-50%"]),
    { stiffness: 100, damping: 300 }
  )

  const y2 = useSpring(
    useTransform(scrollY, [offsetTop - 600, offsetTop + 600], ["25%", "-25%"]),
    { stiffness: 100, damping: 300 }
  )

  const maxHeight = useSpring(
    useTransform(scrollY, [offsetTop - 300, offsetTop + 300], ["80vh", "40vh"]),
    { stiffness: 100, damping: 300 }
  )

  return (
    <motion.div
      className="bg-secondary inner-shadow text-white"
      ref={ref}
      initial={{ y: "25%", maxHeight: "80vh" }}
      style={{ y, maxHeight, overflow: "hidden" }}
    >
      <motion.div initial={{ y: "25" }} style={{ y: y2 }}>
        <Container>
          <Row className="mb-5 justify-content-between">
            <Col lg="6">
              <h2 className="display-4 font-weight-bold">
                Professional Websites & Web Apps
              </h2>
              <p>I develop modern websites and web applications.</p>
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
                className="img-fluid"
                style={{ marginTop: "-10%" }}
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
