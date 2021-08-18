import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Action from '../helpers/Action';

function AuthForm({ isRegister = false, children }) {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    dispatch(
      isRegister
        ? Action.register(payload)
        : Action.login(payload),
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" required />
      </Form.Group>

      <Button variant="primary" type="submit">{children}</Button>
    </Form>
  );
}

export default AuthForm;
