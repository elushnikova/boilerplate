import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import fetchJson from '../../helpers/fetchJson';
import ViewContainer from '../presentational/ViewContainer';
import ViewTitle from '../presentational/ViewTitle';

function AdminView() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJson('/admin')
      .then((data) => {
        if (data.ok) {
          setMessage(data.message);
        } else {
          setError(data.message);
        }
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <ViewContainer>
      <ViewTitle>Admin</ViewTitle>
      {message && <p>{message}</p>}
      {error && <Alert variant="warning">{error}</Alert>}
    </ViewContainer>
  );
}

export default AdminView;
