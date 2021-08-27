import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import AdminView from './views/AdminView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import LogoutView from './views/LogoutView';
import Navigation from './Navigation';
import store from '../store';
import AdminRoute from './routes/AdminRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import UnauthenticatedRoute from './routes/UnauthenticatedRoute';
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

            <ProtectedRoute path="/logout">
              <LogoutView />
            </ProtectedRoute>

            <AdminRoute path="/admin">
              <AdminView />
            </AdminRoute>

            <ProtectedRoute path="/">
              <HomeView />
            </ProtectedRoute>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
