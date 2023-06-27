import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

function Header(props) {
  return (
    /* jshint ignore:start */
    <Navbar bg="primary" data-bs-theme="dark" className="shadow">
      <Container className="justify-content-center">
        <Navbar.Brand className="fs-2">
          <FontAwesomeIcon icon={faBrain} className="me-2" />
          {props.title}
        </Navbar.Brand>
      </Container>
    </Navbar>
    /* jshint ignore:end */
  );
}
function Footer() {
  return (
    /* jshint ignore:start */
    <Container className="mt-auto p-3" fluid>
      <Row className="justify-content-center">
        <Col xs="auto">
          <a href="https://github.com/Jgoldenusr" className="muted fs-4">
            <FontAwesomeIcon icon={faGithub} className="footerIcon me-2" />
            {"Copyright © 2023 Jgoldenusr"}
          </a>
        </Col>
      </Row>
    </Container>
    /* jshint ignore:end */
  );
}
function FlagsGrid(props) {
  return (
    /* jshint ignore:start */
    <Container className="p-3">
      <Row className="justify-content-center" xs={3}>
        {props.flagsArray.map((element) => {
          return (
            <Col key={element.id} className="d-flex justify-content-center">
              <Image
                src={`https://www.countryflagicons.com/SHINY/64/${element.code}.png`}
                alt={element.code}
                onClick={props.evtListener}
                className="flag"
              ></Image>
            </Col>
          );
        })}
      </Row>
    </Container>
    /* jshint ignore:end */
  );
}

function Score(props) {
  const { currentScore, maximumScore } = props;
  return (
    /* jshint ignore:start */
    <Container className="p-3">
      <Row className="justify-content-center fs-4">
        <Col className="text-center" xs={6} md={3}>
          {`Puntos: ${currentScore}`}
        </Col>
        <Col className="text-center" xs={6} md={3}>
          {`Máximo: ${maximumScore}`}
        </Col>
      </Row>
    </Container>
    /* jshint ignore:end */
  );
}
export { FlagsGrid, Header, Score, Footer };
