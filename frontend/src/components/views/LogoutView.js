import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ViewContainer from '../presentational/ViewContainer';
import ViewTitle from '../presentational/ViewTitle';
import Action from '../../helpers/enums/Action';

function LogoutView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.logout());
  });

  return (
    <ViewContainer>
      <ViewTitle>Logout</ViewTitle>
    </ViewContainer>
  );
}

export default LogoutView;
