import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewContainer from '../components/ViewContainer';
import ViewTitle from '../components/ViewTitle';
import AuthForm from '../components/AuthForm';

function RegisterView() {
  return (
    <ViewContainer>
      <Row>
        <Col md={6}>
          <ViewTitle>Register</ViewTitle>
          <AuthForm path="/register">Register</AuthForm>
        </Col>
      </Row>
    </ViewContainer>
  );
}

export default RegisterView;
