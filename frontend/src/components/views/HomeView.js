import { useState, useEffect } from 'react';
import ViewContainer from '../presentational/ViewContainer';
import ViewTitle from '../presentational/ViewTitle';
import fetchJson from '../../helpers/fetchJson';

function HomeView() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchJson()
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
