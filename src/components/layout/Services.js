import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";
import PropTypes from "prop-types";

import service1 from "../../img/services/service1.jpeg";
import service2 from "../../img/services/service2.jpeg";
import service3 from "../../img/services/service3.jpeg";
import service4 from "../../img/services/service4.jpeg";

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

export default function Services() {
  return <React.Fragment>
      <Container fluid>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6" className="mt-3 mb-3">
            <Card>
              <CardImg src={service1} alt="Service 1" />
              <CardTitle className="mt-3">Nivel Organizacional</CardTitle>
              <CardText className="mb-3">lorem ipsum dolor</CardText>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="6" lg="6" className="mt-3 mb-3">
            <Card>
              <CardImg src={service2} alt="Service 2" />
              <CardTitle className="mt-3">Nivel Educativo</CardTitle>
              <CardText className="mb-3">lorem ipsum dolor</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6" className="mt-3 mb-3">
            <Card>
              <CardImg src={service3} alt="Service 3" />
              <CardTitle className="mt-3">Nivel Social</CardTitle>
              <CardText className="mb-3">lorem ipsum dolor</CardText>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="6" lg="6" className="mt-3 mb-3">
            <Card>
              <CardImg src={service4} alt="Service 4" />
              <CardTitle className="mt-3">Nivel Clínico</CardTitle>
              <CardText className="mb-3">lorem ipsum dolor</CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>;
}
