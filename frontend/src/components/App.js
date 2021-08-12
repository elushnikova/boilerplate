import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/register">
          <RegisterView />
        </Route>

        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
