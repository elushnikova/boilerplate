import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewContainer from '../presentational/ViewContainer';
import ViewTitle from '../presentational/ViewTitle';
import AuthForm from '../AuthForm';

function RegisterView() {
  return (
    <ViewContainer>
      <Row>
        <Col md={6}>
          <ViewTitle>Register</ViewTitle>
          <AuthForm isRegister>Register</AuthForm>
        </Col>
      </Row>
    </ViewContainer>
  );
}

export default RegisterView;
