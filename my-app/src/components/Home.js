import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ProjectCard from './ProjectCard';

import chess_img from '../images/ChessDOTCOM.png';
import css_img from '../images/css.png';
import flask_img from '../images/flask.png'
import html_img from '../images/html.png';
import javascript_img from '../images/javascript.png';
import python_img from '../images/python.png';
import react_img from '../images/react.png';
import selfie_img from '../images/thx-cam.jpg';
import thesis_img from '../images/thesis-snipet.png'


const GlobalStyle = createGlobalStyle`
    body {
      text-align: center;
    }

    #technologies-div {
      border: 5px solid var(--white);
      width: 40%;
      margin: auto;
    }

    #technologies-div img {
      width: 100px;
      margin: 10px;
    }

    .project-card img {
      width: 75%;
    }

    #tech-logo-container {
      width: 80%;
      margin: auto;
    }
`

function Home() {

  const technologies = [
    python_img, 
    flask_img, 
    javascript_img, 
    react_img, 
    html_img, 
    css_img 
  ]
  const tech_list = technologies.map(url => {
      return <img key={url} src={url}/>
  });


  return (
    <>
      <GlobalStyle/>
      <div id="title-div">
        <img id="headshot" src={selfie_img}/>
        <h1>Kyle Schneider</h1>
        <h2>Software Engineer</h2>
        <p>
          My love of learning motivates me to create unique solutions to complex problems. 
          <br/> 
          <Link to="/portfolio-site/about">Click here</Link> to learn more about who I am.
        </p>
      </div>

      <div id="technologies-div">
        <h2>Skills</h2>
        <div id="tech-logo-container">
          {tech_list}
        </div>
      </div>

      <div id='projects-div'>
        <h2>Projects</h2>
        <ProjectCard
          title='Flatiron School Capstone Project'
          description='A Chess.com clone maybe?'
          image={chess_img}
          route='/portfolio-site/chess'
        />
        <ProjectCard
          title='Mathematics Honors Thesis'
          description='Laplacian Leader Follower Dynamics'
          image={thesis_img}
          route='/portfolio-site/thesis'
        />
      </div>

      <div id="contact-div">

      </div>
    </>
  );
}

export default Home;