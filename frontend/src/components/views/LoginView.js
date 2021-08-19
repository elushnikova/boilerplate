import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewContainer from '../presentational/ViewContainer';
import ViewTitle from '../presentational/ViewTitle';
import AuthForm from '../AuthForm';

function LoginView() {
  return (
    <ViewContainer>
      <Row>
        <Col md={6} lg={4}>
          <ViewTitle>Login</ViewTitle>
          <AuthForm>Login</AuthForm>
        </Col>
      </Row>
    </ViewContainer>
  );
}

export default LoginView;
