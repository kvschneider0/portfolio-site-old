import NavBar from './NavBar';
import Home from './Home';
import { Switch, Route, useHistory } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
      --grey: grey;
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
      </Switch>
    </div>
  );
}

export default App;
