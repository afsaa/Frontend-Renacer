import React, { Component } from "react";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ServicesAccordion from "./components/ServicesAccordion";
import Contact from "./components/pages/Contact";
import FormSuccess from "./components/pages/FormSuccess";
import { Switch, Route } from "react-router-dom";
import uuid from "uuid/v1";
// Reacstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

library.add(fab, faEnvelope);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: uuid(),
          name: "Organizacional",
          subCategories: [
            "Gestión del Talento Humano",
            "Capacitación y Aprendizaje Organizacional",
            "Psicología de la Salud Ocupacional y Factores de Riesgo Psicosocial",
          ],
          specificServices: [
            [
              "Manejo del estrés laboral",
              "Gestión por competencias",
              "Técnicas de relajación",
            ],
            [
              "Análisis y descripción de cargos",
              "Comunicación Efectiva",
              "Intervención Individuo, Familia y Organización",
            ],
            [
              "Selección de personal",
              "Atención al cliente",
              "Manejo de adicciones",
            ],
          ],
          cardImgSrc: "https://via.placeholder.com/300x180",
          collapse: false,
        },
        {
          id: uuid(),
          name: "Educativo",
          subCategories: [""],
          specificServices: [
            ["Escuelas de padres"],
            ["Elaboración de proyectos de vida"],
            ["Orientación vocacional"],
          ],
          cardImgSrc: "https://via.placeholder.com/500",
          collapse: false,
        },
        {
          id: uuid(),
          name: "Social",
          subCategories: ["Procesos de Desarrollo Comunitario"],
          specificServices: [
            ["Charlas y conferencias dedicadas a la comunidad"],
            ["Diseño e implementación de proyectos"],
            ["Participación en licitaciones"],
          ],
          cardImgSrc: "https://via.placeholder.com/500",
          collapse: false,
        },
        {
          id: uuid(),
          name: "Clínico",
          subCategories: [""],
          specificServices: [
            ["Psicoterapia a personas con trastornos psicológicos"],
            ["Asesoría psicológica individual"],
            ["Seminarios, convivencia y talleres vivenciales"],
          ],
          cardImgSrc: "https://via.placeholder.com/500",
          collapse: false,
        },
        {
          id: uuid(),
          name: "Otros",
          subCategories: [""],
          specificServices: [
            ["Clases de yoga"],
            ["Arte terapia"],
            ["Reflexología"],
          ],
          cardImgSrc: "https://via.placeholder.com/500",
          collapse: false,
        },
      ],
    };
    this.showInfo = this.showInfo.bind(this);
  }

  showInfo = (id) => {
    this.setState({
      services: this.state.services.map((service) => {
        if (service.id === id) {
          service.collapse = !service.collapse;
        }
        return service;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quienes-somos" component={AboutUs} />
          <Route
            path="/servicios"
            render={(props) => (
              <ServicesAccordion
                services={this.state.services}
                showInfo={this.showInfo}
              />
            )}
          />
          <Route exact path="/contacto" component={Contact} />
          <Route path="/exito" component={FormSuccess} />
        </Switch>
      </div>
    );
  }
}

export default App;
