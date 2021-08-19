import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Action from '../helpers/classes/Action';

function AuthForm({ isRegister = false, children }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.profile.error);

  useEffect(() => {
    if (error) {
      dispatch(Action.clearProfileError());
    }
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

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

      <Button variant="primary" type="submit" className="mb-3">{children}</Button>

      {error && <Alert variant="warning">{error}</Alert>}
    </Form>
  );
}

export default AuthForm;
