import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Card } from "react-bootstrap"

const SkillTabs = ({ contents }) => {
  return (
    <Container>
      <Row>
        {contents.map((content, i) => (
          <Col key={i} lg="4" className="mb-4 mb-lg-0">
            <Card className="border-0 custom-shadow">
              <Card.Body className="text-center">
                <FontAwesomeIcon
                  className="mb-1"
                  size="2x"
                  icon={content.icon}
                />
                <h6 className="text-uppercase mb-1">{content.title}</h6>
                <p className="small text-muted mb-0">{content.copy}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SkillTabs
