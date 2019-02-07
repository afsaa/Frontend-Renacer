import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default function FormSuccess() {
  return (
    <div>
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-3">Gracias!</h1>
                <p className="lead">Hemos recibido tu mensaje y te daremos respuesta en las próximas 24 horas.</p>
            </Container>
        </Jumbotron>
    </div>
  )
}
