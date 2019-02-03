import React, { Component } from 'react'
import { Button, Collapse } from 'reactstrap';
import PropTypes from "prop-types";

export class ServiceItem extends Component {
  render() {
    const id = this.props.id;
    return (
        <li style={{listStyleType:"none"}}>
            <Button color="primary" className="btn-lg" block onClick={ this.props.showInfo.bind(this,id) }>{this.props.name}</Button>
            <Collapse isOpen={this.props.collapse}>
              <p>{this.props.description}</p>
            </Collapse>
        </li>
    )
  }
}

ServiceItem.propTypes = {
  showInfo: PropTypes.func.isRequired
};

export default ServiceItem;