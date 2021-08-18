import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ViewContainer from '../presentational/ViewContainer';
import ViewTitle from '../presentational/ViewTitle';
import Action from '../../helpers/Action';
import fetchJson from '../../helpers/fetchJson';

function LogoutView() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetchJson('/session', { method: 'DELETE' })
      .then((data) => data.ok && dispatch(Action.clearProfileData()))
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
