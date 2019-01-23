import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from "prop-types";
import Testimonial from '../img/testimonials/Testimonial1.jpeg';

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

export default function Testimonials() {
  return <React.Fragment>
      <Container fluid>
        <h1>Testimonios</h1>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6" className="mx-2 my-2">
            <img src={Testimonial} alt="Testimonial1" style={{ borderRadius: "50%" }} />
            <span className="mx-auto"> lorem ipsum dolor bla bla bla bla</span>
          </Col>
          <Col xs="12" sm="6" md="6" lg="6" className="mx-2 my-2">
            <img src={Testimonial} alt="Testimonial1" style={{ borderRadius: "50%" }} />
            <span className="mx-auto"> lorem ipsum dolor bla bla bla bla</span>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6" className="mx-2 my-2">
            <img src={Testimonial} alt="Testimonial1" style={{ borderRadius: "50%" }} />
            <span className="mx-auto"> lorem ipsum dolor bla bla bla bla</span>
          </Col>
          <Col xs="12" sm="6" md="6" lg="6" className="mx-2 my-2">
            <img src={Testimonial} alt="Testimonial1" style={{ borderRadius: "50%" }} />
            <span className="mx-auto"> lorem ipsum dolor bla bla bla bla</span>
          </Col>
        </Row>
      </Container>
    </React.Fragment>;
}
