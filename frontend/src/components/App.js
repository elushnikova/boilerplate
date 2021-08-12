import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import Navigation from './Navigation';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />

        <Switch>
          <Route path="/register">
            <RegisterView />
          </Route>

          <Route path="/logout">
            Log out
          </Route>

          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
