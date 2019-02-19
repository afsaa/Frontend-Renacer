import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from "prop-types";

Container.propTypes = {
    fluid: PropTypes.bool
    // applies .container-fluid class
};

export default function Footer() {
  return (
    <React.Fragment>
        <Container fluid className="bg-dark text-white mt-2">
        <p className="text-center m-0 py-3">Todos los derechos reservados. &copy; PsicoRenacer 2019</p>
        </Container>
    </React.Fragment>
  )
}
