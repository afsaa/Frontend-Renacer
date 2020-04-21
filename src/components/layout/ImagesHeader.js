import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
} from "reactstrap";
import PropTypes from "prop-types";

import heroImage from "../../img/header/hero-image.jpeg";

Container.propTypes = {
  fluid: PropTypes.bool,
  // applies .container-fluid class
};

export default class ImagesHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" className="p-0">
              <Card inverse>
                <CardImg top width="100%" src={heroImage} alt="hero image" />
                <CardImgOverlay
                  style={{
                    marginTop: 30,
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  <CardTitle
                    style={{ fontFamily: "Lobster", fontSize: "2.5rem" }}
                  >
                    Centro Psicoterapeutico Renacer
                  </CardTitle>
                  <CardText
                    style={{ fontFamily: "Dancing Script", fontSize: "1.5rem" }}
                  >
                    Especialistas en estrés y relajación.
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
