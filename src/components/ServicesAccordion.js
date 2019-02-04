import React, { Component } from 'react';
import ServiceItem from './ServiceItem';
import PropTypes from "prop-types";

export class ServicesAccordion extends Component {
  render() {
    return (
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
    )
  }
}

ServicesAccordion.propTypes = {
  services: PropTypes.array.isRequired,
  showInfo: PropTypes.func.isRequired
};

export default ServicesAccordion;

