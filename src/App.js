import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [projects, setProjects] = React.useState([]);
  const [filteredArr, setFilteredArr] = React.useState([projects]);
  const [allActive, setAllActive] = React.useState(false);
  const [reactActive, setReactActive] = React.useState(false);
  const [jqueryActive, setJqueryActive] = React.useState(false);
  const [rubyActive, setRubyActive] = React.useState(false);
  const [djangoActive, setDjangoActive] = React.useState(false);
  const [pythonActive, setPythonActive] = React.useState(false);
  const [railsActive, setRailsActive] = React.useState(false);
  const [jsActive, setJsActive] = React.useState(false);
  const [expressActive, setExpressActive] = React.useState(false);
  const url = "https://better-portfolio-back.herokuapp.com/projects/";
  const getProjects = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredArr(data);
      });
  };

  React.useEffect(() => getProjects(), []);

  const handleAllClick = () => {
    setFilteredArr(projects);
      setReactActive(false);
      setAllActive(true);
      setDjangoActive(false);
      setJqueryActive(false);
      setJsActive(false);
      setRailsActive(false);
      setRubyActive(false);
      setExpressActive(false);
      setPythonActive(false);
  };

  const handleReactClick = () => {
    const newArr = projects.filter((project) => {
      return project.react === true;
    });
    setFilteredArr(newArr);
    setReactActive(true);
    setAllActive(false);
    setDjangoActive(false);
    setJqueryActive(false);
    setJsActive(false);
    setRailsActive(false);
    setRubyActive(false);
    setExpressActive(false);
    setPythonActive(false);
  };

  const handleJqueryClick = () => {
    const newArr = projects.filter((project) => {
      return project.jquery === true;
    });
    setFilteredArr(newArr);
    setReactActive(false);
    setAllActive(false);
    setDjangoActive(false);
    setJqueryActive(true);
    setJsActive(false);
    setRailsActive(false);
    setRubyActive(false);
    setExpressActive(false);
    setPythonActive(false);
  };

  const handleRubyClick = () => {
    const newArr = projects.filter((project) => {
      return project.ruby === true;
    });
    setFilteredArr(newArr);
    setReactActive(false);
    setAllActive(false);
    setDjangoActive(false);
    setJqueryActive(false);
    setJsActive(false);
    setRailsActive(false);
    setRubyActive(true);
    setExpressActive(false);
    setPythonActive(false);
  };

  const handleDjangoClick = () => {
    const newArr = projects.filter((project) => {
      return project.django === true;
    });
    setFilteredArr(newArr);
    setReactActive(false);
    setAllActive(false);
    setDjangoActive(true);
    setJqueryActive(false);
    setJsActive(false);
    setRailsActive(false);
    setRubyActive(false);
    setExpressActive(false);
    setPythonActive(false);
  };

  const handlePythonClick = () => {
    const newArr = projects.filter((project) => {
      return project.python === true;
    });
    setFilteredArr(newArr);
    setReactActive(false);
    setAllActive(false);
    setDjangoActive(false);
    setJqueryActive(false);
    setJsActive(false);
    setRailsActive(false);
    setRubyActive(false);
    setExpressActive(false);
    setPythonActive(true);
  };

  const handleExpressClick = () => {
    const newArr = projects.filter((project) => {
      return project.express === true;
    });
    setFilteredArr(newArr);
    setReactActive(false);
    setAllActive(false);
    setDjangoActive(false);
    setJqueryActive(false);
    setJsActive(false);
    setRailsActive(false);
    setRubyActive(false);
    setExpressActive(true);
    setPythonActive(false);
  };

  const handleRailsClick = () => {
    const newArr = projects.filter((project) => {
      return project.rails === true;
    });
    setFilteredArr(newArr);
    setReactActive(false);
    setAllActive(false);
    setDjangoActive(false);
    setJqueryActive(false);
    setJsActive(false);
    setRailsActive(true);
    setRubyActive(false);
    setExpressActive(false);
    setPythonActive(false);
  };

  const handleJsClick = () => {
    const newArr = projects.filter((project) => {
      return project.javascript === true;
    });
    setFilteredArr(newArr);
    setReactActive(false);
    setAllActive(false);
    setDjangoActive(false);
    setJqueryActive(false);
    setJsActive(true);
    setRailsActive(false);
    setRubyActive(false);
    setExpressActive(false);
    setPythonActive(false);
  };

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
            <Nav.Link href="#intro">INTRO</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
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
      <section id="projects">
        <h2 id="projects-header">PROJECTS</h2>
        <hr id="projects-line" />
        <div id="all-button-div">
          <button
            className={allActive ? "all-active" : null}
            id="all-button"
            onClick={handleAllClick}
          >
            All
          </button>
        </div>
        <div id="filter-buttons">
          <button
            className={reactActive ? "active" : null}
            onClick={handleReactClick}
          >
            React
          </button>
          <button
            className={jqueryActive ? "active" : null}
            onClick={handleJqueryClick}
          >
            jQuery
          </button>
          <button
            className={rubyActive ? "active" : null}
            onClick={handleRubyClick}
          >
            {" "}
            Ruby
          </button>
          <button
            className={expressActive ? "active" : null}
            onClick={handleExpressClick}
          >
            Express
          </button>
          <button
            className={railsActive ? "active" : null}
            onClick={handleRailsClick}
          >
            Rails
          </button>
          <button
            className={pythonActive ? "active" : null}
            onClick={handlePythonClick}
          >
            Python
          </button>
          <button
            className={djangoActive ? "active" : null}
            onClick={handleDjangoClick}
          >
            Django
          </button>
          <button
            className={jsActive ? "active" : null}
            onClick={handleJsClick}
          >
            JS
          </button>
        </div>
        <div id="project-cards">
          {filteredArr.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
