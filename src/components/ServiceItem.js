import React, { Component } from 'react'
import { Container, Button, Collapse, Card, CardDeck, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
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
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    </CardBody>
                  </Card>
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