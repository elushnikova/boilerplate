import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import ViewContainer from '../presentational/ViewContainer';
import ViewTitle from '../presentational/ViewTitle';

function ForbiddenView() {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <ViewContainer>
      <ViewTitle>Forbidden</ViewTitle>

      <Alert variant="info">
        <p>Access to this page is restricted</p>
        <Button variant="outline-info" onClick={goBack}>
          Go back
        </Button>
      </Alert>

    </ViewContainer>
  );
}

export default ForbiddenView;
