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
      <Container>
        <h1>Testimonios</h1>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6" className="my-2 p-0">
            <img src={Testimonial} alt="Testimonial1" className="float-left rounded-circle" />
            <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, blanditiis. Dicta totam nulla fuga commodi.</p>
          </Col>
          <Col xs="12" sm="6" md="6" lg="6" className="my-2 p-0">
            <img src={Testimonial} alt="Testimonial1" className="float-left rounded-circle" />
            <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, blanditiis. Dicta totam nulla fuga commodi.</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6" className="my-2 p-0">
            <img src={Testimonial} alt="Testimonial1" className="float-left rounded-circle" />
            <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, blanditiis. Dicta totam nulla fuga commodi.</p>
          </Col>
          <Col xs="12" sm="6" md="6" lg="6" className="my-2 p-0">
            <img src={Testimonial} alt="Testimonial1" className="float-left rounded-circle" />
            <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, blanditiis. Dicta totam nulla fuga commodi.</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>;
}
