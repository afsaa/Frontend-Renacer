import React, { Component } from 'react'
import { Container, Button, Collapse, Card, CardDeck, CardImg, CardBody, CardTitle } from 'reactstrap';
import PropTypes from "prop-types";

export class ServiceItem extends Component {
  render() {
    const id = this.props.id;
    return (
        <li style={{listStyleType:"none"}}>
            <Button color="primary" className="btn-lg" block onClick={ this.props.showInfo.bind(this,id) }>{this.props.name}</Button>
            <Collapse isOpen={this.props.collapse}>
              <Container className="my-3">
                <CardDeck>
                  {
                    this.props.subCategories.map( cardTitle => 
                      <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                          <CardTitle>{ cardTitle }</CardTitle>
                          {
                            this.props.specificServices.map( cardItem => 
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item">{ cardItem }</li>
                              </ul>
                              )
                          }
                        </CardBody>
                      </Card>
                    )
                  }
                </CardDeck>
              </Container>
            </Collapse>
        </li>
    )
  }
}

ServiceItem.propTypes = {
  showInfo: PropTypes.func.isRequired
};

export default ServiceItem;