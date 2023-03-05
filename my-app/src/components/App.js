import { Switch, Route, useHistory } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import NavBar from './NavBar';
import Home from './Home';
import Chess from './Chess';
import Thesis from './Thesis';

const GlobalStyle = createGlobalStyle`
    :root {
      --light-grey: #191919;
      --dark-grey: #111;
      --white: #fff;
      --baby-blue: #871F78;
      --black: black;
    }
    
    body {
      background-color: var(--dark-grey);
      margin-top: 40px;
      padding: 30px;
      color: var(--white);
      font-family: 'Arial';
    }
`;

function App() {

  return (
    <div>
      <GlobalStyle/>

      <NavBar/>
      <Switch>

        <Route exact path="/portfolio-site">
          <Home/>
        </Route>

        <Route path="/portfolio-site/about">
          <>
            <h1> Hello </h1>
          </>
        </Route>

        <Route path="/portfolio-site/thesis">
          <Thesis />
        </Route>

        <Route path="/portfolio-site/chess">
          <Chess />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
