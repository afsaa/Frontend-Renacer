import React, { Component } from 'react'
import {Button} from 'reactstrap';

export class ServiceItem extends Component {
  render() {
    return (
        <li style={{listStyleType:"none"}}>
            <Button color="primary" className="btn-lg" block>{this.props.name}</Button>
            <p>{this.props.description}</p>
        </li>
    )
  }
}

export default ServiceItem

