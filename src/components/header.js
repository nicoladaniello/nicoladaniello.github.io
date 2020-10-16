import PropTypes from "prop-types"
import React from "react"
import { Card } from "react-bootstrap"
import Background from "./three/background"

const Header = ({ siteTitle }) => {
  return (
    <Card className="border-0 bg-transparent">
      <Background style={{ height: "110vh" }} />
      <Card.ImgOverlay className="d-flex">
        <div className="m-auto">
          <h1 className="display-2 font-weight-bold text-uppercase">
            <span className="text-stroke-reverse">Craft</span>
            <span className="text-stroke">ing</span>
            <br />
            <span className="text-stroke">Di</span>
            <span className="text-stroke-reverse">gital</span>
            <br />
            <span className="text-stroke-reverse">Pro</span>
            <span className="text-stroke">ducts</span>
          </h1>
          <h2>
            Nicola D'Aniello
            <small>- Full Stack Developer</small>
          </h2>
        </div>
      </Card.ImgOverlay>
    </Card>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
