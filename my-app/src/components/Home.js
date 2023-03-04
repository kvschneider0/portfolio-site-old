import { Link } from 'react-router-dom';

import selfie_img from '../images/thx-cam.jpg';
import python_img from '../images/python.png';
import react_img from '../images/react.png';
import javascript_img from '../images/javascript.png';
import html_img from '../images/html.png';
import css_img from '../images/css.png';

function Home() {

  const technologies = [python_img, react_img, javascript_img, html_img, css_img ]
  const tech_list = technologies.map(url => {
      return <img key={url} src={url}/>
  });


  return (
    <>
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

      <div>
        
      </div>

      <div id="contact-div">
        <h2>Projects</h2>
        <Link className="project-div">
          Mathematics Honors Thesis
        </Link>
      </div>
    </>
  );
}

export default Home;