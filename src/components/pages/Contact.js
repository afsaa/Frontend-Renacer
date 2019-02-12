import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

library.add(faArrowLeft);

export default function Contact() {
  return (
    <Container>
      <Link to="/"><Button color="link" className="mt-3"><FontAwesomeIcon icon="arrow-left" /> Volver</Button></Link>
        <h1 className="mt-3">Contacto</h1>
          <Form name="contacto" method="POST" action="/exito" data-netlify="true" data-netlify-honeypot="bot-field" className="mt-3">
            <input type="hidden" name="form-name" value="contacto" />
            <FormGroup>
                <Label for="exampleText">Nombre</Label>
                <Input type="text" name="name" placeholder="Nombre" required/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Correo</Label>
                <Input type="email" name="email" placeholder="Correo" required/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Escribenos tu mensaje</Label>
                <Input type="textarea" name="message" required/>
            </FormGroup>
            <Button type="submit" className="btn-success">Enviar</Button>
        </Form>
    </Container>
  )
}
