import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ServiceItem from './ServiceItem';
import PropTypes from "prop-types";

library.add(faArrowLeft);

export class ServicesAccordion extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/"><Button color="link" className="mt-0"><FontAwesomeIcon icon="arrow-left" /> Volver</Button></Link>
        <ul style={{ padding: "0" }}>
            {this.props.services.map(service => {
                return (
                    <ServiceItem
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        description={service.description}
                        collapse={service.collapse}
                        showInfo={this.props.showInfo}
                    />
                );
            })}
        </ul>
        </Fragment>
    )
  }
}

ServicesAccordion.propTypes = {
  services: PropTypes.array.isRequired,
  showInfo: PropTypes.func.isRequired
};

export default ServicesAccordion;

