import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewContainer from '../components/ViewContainer';
import ViewTitle from '../components/ViewTitle';
import AuthForm from '../components/AuthForm';

function LoginView() {
  return (
    <ViewContainer>
      <Row>
        <Col md={6}>
          <ViewTitle>Login</ViewTitle>
          <AuthForm path="/session">Login</AuthForm>
        </Col>
      </Row>
    </ViewContainer>
  );
}

export default LoginView;
