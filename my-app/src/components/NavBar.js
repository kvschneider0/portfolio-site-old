import { NavLink } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Button } from './shared';

import resume from '../Rezume.pdf'
import github_img from '../images/github.png';
import linkedin_img from '../images/linkedin.png';

const GlobalStyle = createGlobalStyle`
  header {
    align-items: center;
    background-color: grey;
    border: 1px solid var(--white);
    display: flex;
    height: 40px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
  }

  nav * {
    margin: auto 20px;
  }

  nav img {
    height: 20px;
  }
`

function NavBar() {
    return (
        <>
          <GlobalStyle />
          <header>
              <nav>
              <Button as={NavLink} exact to='/portfolio-site'>Home</Button>  
              <Button as={NavLink} to='/portfolio-site/about'>About</Button>    
              <Button as={NavLink} to={resume} target='_blank'>Resume</Button>    
              <Button as={NavLink} to='/portfolio-site/contact'>Contact</Button>
              <Button as={NavLink} to={{pathname: 'https://github.com/Schnyle'}} target="_blank">
                <img src={github_img} alt='GitHub' />
              </Button>    
              <Button as={NavLink} to={{pathname: 'https://www.linkedin.com/in/kyle-v-schneider/'}} target="_blank">
                <img src={linkedin_img} alt={'LinkedIn'}/>
              </Button>    
              </nav>
          </header>
        </>
    );
}

export default NavBar;