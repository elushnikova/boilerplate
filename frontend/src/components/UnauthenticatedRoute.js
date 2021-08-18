import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UnauthenticatedRoute(props) {
  const profile = useSelector((state) => state.profile.data);

  if (profile) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}

export default UnauthenticatedRoute;
