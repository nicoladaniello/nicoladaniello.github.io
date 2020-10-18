import React from "react"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lorem from "../components/home/lorem"
import ShowCase from "../components/home/showCase"
import Image1 from "../images/books.png"
import Image2 from "../images/qralacarte.png"
import profileImg from "../images/profile.jpg"
import Footer from "../components/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Parallax from "../components/motion/parallax"
import Heading from "../components/motion/heading"

const showCaseData = {
  contents: [
    {
      title: "QRalacarte.com",
      copy:
        "QRalacarte is a server-less web application that enables businesses in the hospitality sector to quickly create a modern looking online version of their menus, inclusive of personalised QR code.",
      cta: "Visit the website",
      link: "https://qralacarte.com",
    },
    {
      title: "Books, accounting",
      copy:
        "Books is a bespoke software I developed for an Italian business, consisting of a desktop multi platform accounting application. It is written in JAVA, Spring, Hibernate and H2 embedded database. With supports for multi-tenancy, i18n and auto-updates.",
      cta: "View on Github",
      link: "https://github.com/nicoladaniello/books",
    },
  ],
  images: [
    {
      alt: "Books, accounting application",
      src: Image1,
    },
    {
      alt: "QRalacarte.com",
      src: Image2,
    },
  ],
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Parallax>
        <Container>
          <Col md="9">
            <p className="lead">
              I am a technology enthusiast, and experienced full-stack
              developer. During my career I developed different softwares
              including desktop, mobile and web applications for businesses,
              individuals and for personal use. If you'd like to get in contact
              please feel free to drop me an email and I'll get back to you as
              soon as possible.
            </p>
            <p>
              <a href="mailto:nicola.danie@gmail.com" className="btn btn-link">
                Get in touch <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </p>
          </Col>
        </Container>
      </Parallax>

      <ShowCase data={showCaseData} />

      <Lorem />

      {/** About */}
      <Parallax>
        <Jumbotron fluid id="about" className="bg-transparent mb-0">
          <Container fluid>
            <Row className="justify-content-around">
              <Col lg="4">
                {/* <Image style={{ marginTop: "-30%" }}></Image> */}
                <img
                  className="img-fluid"
                  alt="Profile of Nicola D'Aniello"
                  src={profileImg}
                />
              </Col>
              <Col lg="5">
                <Heading>About</Heading>
                <p className="lead">
                  After self-teaching myself coding at age twelve I’ve developed
                  a strong passion for this industry, which encouraged me to go
                  deep into various subjects of computer science and gain skills
                  in several modern full-stack technologies.
                  <br />
                  I'm also an upcoming (November 2020) BSc graduate in
                  Computing. If you'd like to hire me or see my CV please drop
                  me an email, and I'll get bacl to you as soon as possible.
                </p>
                <p>
                  <a
                    href="mailto:nicola.danie@gmail.com"
                    className="btn btn-link"
                  >
                    Get in touch <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Parallax>

      <Footer />
    </Layout>
  )
}

export default IndexPage
