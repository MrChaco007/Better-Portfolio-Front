import logo from "./logo.svg";
import "./App.css";
import "./Canvas.scss"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [projects, setProjects] = React.useState([]);
  const [filteredArr, setFilteredArr] = React.useState([]);
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

  const loading = () => {
    return <div className="lds-dual-ring"></div>;
  };

  const loaded = () => {
    return filteredArr.map((project, index) => {
      return <ProjectCard key={index} project={project} />;
    });
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
            <Nav.Link id="intro-link" href="#intro">
              INTRO
            </Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <Nav.Link href="#who">WHO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section id="intro">
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="header">
          <h2 id="header-text">
            Hello, I'm <span id="name2">Alexander Chaconas</span>. <br />
            I'm a full-stack developer.
          </h2>
          <p id="scroll-header">Check out my work</p>
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
        </div>
      </section>
      <section id="projects">
        <h2 className="header">PROJECTS</h2>
        <hr className="header-line" />
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
            className={reactActive ? "active2" : null}
            onClick={handleReactClick}
          >
            React
          </button>
          <button
            className={jqueryActive ? "active2" : null}
            onClick={handleJqueryClick}
          >
            jQuery
          </button>
          <button
            className={rubyActive ? "active2" : null}
            onClick={handleRubyClick}
          >
            {" "}
            Ruby
          </button>
          <button
            className={expressActive ? "active2" : null}
            onClick={handleExpressClick}
          >
            Express
          </button>
          <button
            className={railsActive ? "active2" : null}
            onClick={handleRailsClick}
          >
            Rails
          </button>
          <button
            className={pythonActive ? "active2" : null}
            onClick={handlePythonClick}
          >
            Python
          </button>
          <button
            className={djangoActive ? "active2" : null}
            onClick={handleDjangoClick}
          >
            Django
          </button>
          <button
            className={jsActive ? "active2" : null}
            onClick={handleJsClick}
          >
            JS
          </button>
        </div>
        <div id="project-cards">
          {filteredArr.length > 0 ? loaded() : loading()}
        </div>
      </section>
      <section id="who">
        <h2 className="header">WHO</h2>
        <hr className="header-line" />
        <div id="profile-div">
          <img
            id="profile"
            src="https://res.cloudinary.com/dvnl2s9um/image/upload/v1608745815/15672988_10211212030552102_7722795121537872527_n_pkzqgc.jpg"
          />
          <br />
          <a
            href="https://drive.google.com/file/d/1ASnf4fMUO4r9YQ5TKFaA6KN3RFwVaR4k/view?usp=sharing"
            target="_blank"
          >
            <button id="resume-button">View My Resume</button>
          </a>
          <div id="bio-container">
            <p>
              I am a software developer with 4 years of marketing and
              communications experience. I combine my knowledge of frameworks,
              libraries, integrated development environments, languages, and
              code hosting platforms with exceptional interpersonal
              communication and leadership skills to develop well-tested, clean,
              and eye-grabbing applications. <br /> <br /> I am motivated by my
              strong appetite to get better at what I do and to become a
              reliable asset for a team. My marketing experience enables me to
              see how even the most robust back end logic is futile without an
              intuitive, user-friendly, and appealing front end design.
            </p>
          </div>
        </div>
        <section id="contact">
          <ContactForm />
        </section>
      </section>
      <div id="footer">
        <a href="#app">
          <FontAwesomeIcon id="up-arrow" icon={faArrowUp} size="3x" />
        </a>
        <div id="icons">
          <a className="icon-link" href="https://github.com/MrChaco007">
            <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x" />
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/alex-chaconas/"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
          </a>
        </div>
        <p id="footer-text">Alexander Chaconas ©2021</p>
      </div>
    </div>
  );
}

export default App;
