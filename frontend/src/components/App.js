import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import LogoutView from '../views/LogoutView';
import Navigation from './Navigation';
import store from '../helpers/store';
import ProtectedRoute from './ProtectedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <UnauthenticatedRoute path="/register">
              <RegisterView />
            </UnauthenticatedRoute>

            <UnauthenticatedRoute path="/login">
              <LoginView />
            </UnauthenticatedRoute>

            <Route path="/logout">
              <LogoutView />
            </Route>

            <ProtectedRoute path="/">
              <HomeView />
            </ProtectedRoute>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
