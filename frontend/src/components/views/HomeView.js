import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import ViewContainer from '../presentational/ViewContainer';
import ViewTitle from '../presentational/ViewTitle';
import Action from '../../helpers/classes/Action';

function HomeView() {
  const message = useSelector((state) => state.home.data);
  const error = useSelector((state) => state.home.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.fetchHomeData());
  }, [dispatch]);

  return (
    <ViewContainer>
      <ViewTitle>Home</ViewTitle>
      {message && <p>{message}</p>}
      {error && <Alert variant="warning">{error}</Alert>}
    </ViewContainer>
  );
}

export default HomeView;
