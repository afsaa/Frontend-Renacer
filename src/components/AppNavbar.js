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
  color: gold;
  :hover {
    color: grey;
    border-top: 3px solid gold;
    border-bottom: 3px solid gold;
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
            <NavbarBrand className="text-info" href="/">
              Psico Renacer
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink className="text-warning" href="#">
                    Inicio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-warning" href="#">
                    Quienes somos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-warning" href="#">
                    Servicios
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-warning" href="#">
                    Contáctenos
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink href="#">
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
