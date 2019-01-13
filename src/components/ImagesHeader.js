import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import Relaxing1 from "../img/Relaxing1.jpg";
import Relaxing2 from "../img/Relaxing2.jpg";
import Therapy1 from "../img/Therapy1.jpeg";
import Therapy2 from "../img/Therapy2.jpeg";

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

export default class ImagesHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col xs="12" sm="6" lg="4" className="p-0">
              <img
                src={Relaxing1}
                alt="Responsive image1"
                className="img-fluid"
              />
            </Col>
            <Col xs="12" sm="6" lg="4" className="p-0">
              <img
                src={Therapy1}
                alt="Responsive image3"
                className="img-fluid"
              />
              <img
                src={Therapy2}
                alt="Responsive image4"
                className="img-fluid"
              />
            </Col>
            <Col xs="12" sm="12" lg="4" className="p-0">
              <img
                src={Relaxing1}
                alt="Responsive image2"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
