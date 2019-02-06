import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function Contact() {
  return (
    <Container>
        <h1 className="mt-5">Contacto</h1>
          <Form name="contacto" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/exito" className="mt-3">
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
