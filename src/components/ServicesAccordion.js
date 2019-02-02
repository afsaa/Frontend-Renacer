import React, { Component } from 'react';
import ServiceItem from './ServiceItem';
export class ServicesAccordion extends Component {
  render() {
    return (
        <ul>
            {this.props.services.map(s => {
                return (
                    <ServiceItem
                        key={s.id}
                        name={s.name}
                        description={s.description}
                    />
                );
            })}
        </ul>
    )
  }
}

export default ServicesAccordion

