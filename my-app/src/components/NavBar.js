import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header>
            <nav>
              <NavLink to='/portfolio-site'>Home</NavLink>  
              <NavLink to='/portfolio-site/about'>About</NavLink>    
              <NavLink to='/portfolio-site/resume'>Resume</NavLink>    
              <NavLink to='/portfolio-site/contact'>Contact</NavLink>
              <NavLink to={{pathname: 'https://github.com/Schnyle'}} target="_blank">GitHub</NavLink>    
              <NavLink to={{pathname: 'https://www.linkedin.com/in/kyle-v-schneider/'}} target="_blank">LinkedIn</NavLink>    
            </nav>
        </header>
    );
}

export default NavBar;