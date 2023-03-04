import NavBar from './NavBar';
import Home from './Home';
import { Switch, Route, useHistory } from 'react-router-dom';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
