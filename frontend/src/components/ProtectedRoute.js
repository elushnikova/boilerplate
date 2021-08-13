import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute(props) {
  const profile = useSelector((state) => state.profile);

  if (!profile) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
}

export default ProtectedRoute;
