import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ViewContainer from '../components/ViewContainer';
import ViewTitle from '../components/ViewTitle';

function LogoutView() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetch('/session', { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => data.ok && dispatch({ type: 'REMOVE_PROFILE' }))
      .then(() => history.push('/'))
      .catch(console.log);
  });

  return (
    <ViewContainer>
      <ViewTitle>Logout</ViewTitle>
    </ViewContainer>
  );
}

export default LogoutView;
