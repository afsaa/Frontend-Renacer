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
import { Link } from 'react-router-dom'

const styledLink = {
  color:"white",
  fontSize: "1rem",
  textDecoration: "none"
};

const CustomNavLink = styled.a`
  margin: 1em 1em;
  padding: 0.25em 0.25em;
  display: inline-block;

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: steelblue;
    transition: width .4s;
  }

  :hover::after {
    width: 100%;
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
    return <div>
        <Navbar color="dark" dark expand="md" className="mb-0">
          <Container>
            <NavbarBrand className="text-light" href="/">
              Psico Renacer
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto text-center" navbar>
                <NavItem>
                  <CustomNavLink>
                    <Link to="/" style={styledLink}>Inicio</Link>
                  </CustomNavLink>
                </NavItem>
                <NavItem>
                  <CustomNavLink>
                    <Link to="/quienes-somos" style={styledLink}>Quienes Somos</Link>
                  </CustomNavLink>
                </NavItem>
                <NavItem>
                  <CustomNavLink>
                    <Link to="/servicios" style={styledLink}>Servicios</Link>
                  </CustomNavLink>
                </NavItem>
                <NavItem>
                  <CustomNavLink>
                    <Link to="/contacto" style={styledLink}>Contactenos</Link>
                  </CustomNavLink>
                </NavItem>
              </Nav>
              <Nav className="mx-auto text-center" navbar>
                <NavItem>
                  <NavLink href="https://wa.me/573147175246?text=Hola%20estoy%20interesado%20en%20sus%20servicios">
                    <FontAwesomeIcon icon={["fab", "whatsapp"]} color="#25d366" size="2x" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>;
  }
}

export default AppNavbar;
