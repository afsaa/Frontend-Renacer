import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const CustomNavLink = styled.a`
  color: white !important;
  text-decoration: none !important;
  margin: 1em 1em;
  padding: 0.25em 0.25em;
  font-size: 1rem;

  :hover {
    border-bottom: 2px solid steelblue;
    font-weight: 500;
  }
`;

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="mb-0">
          <Container>
            <NavbarBrand className="text-light" href="/">
              Psico Renacer
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <CustomNavLink href="/">Inicio</CustomNavLink>
                </NavItem>
                <NavItem>
                  <CustomNavLink href="#about">Quienes Somos</CustomNavLink>
                </NavItem>
                <NavItem>
                  <CustomNavLink href="#">Servicios</CustomNavLink>
                </NavItem>
                <NavItem>
                  <CustomNavLink href="#">Contáctenos</CustomNavLink>
                </NavItem>
              </Nav>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink href="https://wa.me/573147175246?text=Hola%20estoy%20interesado%20en%20sus%20servicios">
                    <FontAwesomeIcon
                      icon={["fab", "whatsapp"]}
                      color="#25d366"
                      size="2x"
                    />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
