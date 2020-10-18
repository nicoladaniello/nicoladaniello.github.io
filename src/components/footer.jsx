import React from "react"
import { Jumbotron, Row, Col, Container } from "react-bootstrap"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Container>
      <Jumbotron fluid className="position-relative bg-transparent">
        <Row className="justify-content-center text-center">
          <Col lg="auto">
            <Link className="btn btn-link" to="/">
              GitHub
            </Link>
          </Col>
          <Col lg="auto">
            <Link className="btn btn-link" to="/">
              LinkedIn
            </Link>
          </Col>
          <Col lg="auto">
            <Link className="btn btn-link" to="/">
              Email
            </Link>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  )
}

export default Footer
