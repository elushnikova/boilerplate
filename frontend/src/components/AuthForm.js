import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormRegister({ path, children }) {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => data.ok && dispatch({ type: 'SET_PROFILE', payload: data.profile }))
      .then(() => history.push('/'))
      .catch(console.log);
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

export default FormRegister;
