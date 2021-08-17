import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import LogoutView from '../views/LogoutView';
import Navigation from './Navigation';
import store from '../helpers/store';
import ProtectedRoute from './ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/register">
              <RegisterView />
            </Route>

            <Route path="/login">
              <LoginView />
            </Route>

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
