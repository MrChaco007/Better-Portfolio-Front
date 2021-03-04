import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="app">
      <Navbar id="Nav" collapseOnSelect expand="md">
        <Navbar.Brand>
          <img
            id="brand"
            src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1609191931/Personal_Logo_1_adiipp.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">INTRO</Nav.Link>
            <Nav.Link href="#pricing">PROJECTS</Nav.Link>
            <Nav.Link href="#pricing">WHO+WHAT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section id="intro">
        <h2 id="intro-header">
          Hello, I'm <span id="name">Alexander Chaconas</span>. <br />
          I'm a full-stack developer.
        </h2>
        <p id="scroll-header">View my work</p>
        <div className="mouse_scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
