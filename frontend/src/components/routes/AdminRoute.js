import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ForbiddenView from '../views/ForbiddenView';

function AdminRoute(props) {
  const profile = useSelector((state) => state.profile.data);

  if (!profile) {
    return <Redirect to="/login" />;
  }

  if (!profile.isAdmin) {
    return <ForbiddenView />;
  }

  return <Route {...props} />;
}

export default AdminRoute;
