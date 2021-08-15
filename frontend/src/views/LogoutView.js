import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ViewContainer from '../components/ViewContainer';
import ViewTitle from '../components/ViewTitle';
import fetchJson from '../helpers/fetchJson';

function LogoutView() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetchJson('/session', { method: 'DELETE' })
      .then((data) => data.ok && dispatch({ type: 'REMOVE_PROFILE' }))
      .then(() => history.push('/'))
      .catch(console.log); // eslint-disable-line no-console
  });

  return (
    <ViewContainer>
      <ViewTitle>Logout</ViewTitle>
    </ViewContainer>
  );
}

export default LogoutView;
