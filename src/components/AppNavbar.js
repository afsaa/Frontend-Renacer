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
import styled, { keyframes } from "styled-components";

const CustomNavLink = styled.a`
  color: white !important;
  text-decoration: none !important;
  margin: 1em 1em;
  padding: 0.25em 0.25em;
  font-size: 1rem;

  :hover {
    border-top: 3px solid gold;
    border-bottom: 3px solid gold;
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
        <Navbar color="dark" dark expand="md" className="mb-5">
          <Container>
            <NavbarBrand className="text-light" href="/">
              Psico Renacer
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <CustomNavLink href="#">Inicio</CustomNavLink>
                </NavItem>
                <NavItem>
                  <CustomNavLink href="#">Quienes Somos</CustomNavLink>
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
                  <NavLink href="https://wa.me/573147175246/">
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
