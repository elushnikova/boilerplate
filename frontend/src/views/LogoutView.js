import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    <div>Logout...</div>
  );
}

export default LogoutView;
