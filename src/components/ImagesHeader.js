import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay
} from "reactstrap";
import PropTypes from "prop-types";

import Relaxing1 from "../img/Relaxing1.jpg";
//import Relaxing2 from "../img/Relaxing2.jpg";
//import Therapy1 from "../img/Therapy1.jpeg";
//import Therapy2 from "../img/Therapy2.jpeg";
import Therapy3 from "../img/Therapy3.jpg";

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
            <Col xs="12" sm="6" md="6" lg="4" className="p-0">
              <Card inverse>
                <CardImg src={Relaxing1} alt="Card image" />
                <CardImgOverlay style={{ marginTop: 200 }}>
                  <CardTitle>Centro Psicoterapeutico Renacer</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias, totam.
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="6" lg="4" className="p-0">
              <img
                src={Therapy3}
                alt="Responsive image3"
                className="img-fluid"
              />
              <img
                src={Therapy3}
                alt="Responsive image4"
                className="img-fluid"
              />
            </Col>
            <Col
              xs="12"
              sm="12"
              md="12"
              lg="4"
              className="p-0 d-sm-none d-lg-block"
            >
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
