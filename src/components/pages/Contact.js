import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function Contact() {
  return (
    <Container>
        <h1 className="mt-5">Contacto</h1>
        <Form name="contact" method="post" data-netlify="true" className="mt-3">
            <FormGroup>
                <Label for="exampleText">Nombre</Label>
                <Input type="text" name="name" placeholder="Nombre" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Correo</Label>
                <Input type="email" name="email" placeholder="Correo" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Escribenos tu mensaje</Label>
                <Input type="textarea" name="text" />
            </FormGroup>
            <FormGroup>
                <div data-netlify-recaptcha="true"></div>
            </FormGroup>
            <Button type="submit" className="btn-success">Enviar</Button>
        </Form>
    </Container>
  )
}