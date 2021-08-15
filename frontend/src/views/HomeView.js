import { useState, useEffect } from 'react';
import ViewContainer from '../components/ViewContainer';
import ViewTitle from '../components/ViewTitle';
import fetchJson from '../helpers/fetchJson';

function HomeView() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchJson('/hello')
      .then((data) => setMessage(data.message))
      .catch(console.log); // eslint-disable-line no-console
  }, []);

  return (
    <ViewContainer>
      <ViewTitle>Home</ViewTitle>
      <p>{message}</p>
    </ViewContainer>
  );
}

export default HomeView;
