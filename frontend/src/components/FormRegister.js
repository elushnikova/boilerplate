import { useDispatch } from 'react-redux';

function FormRegister() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => data.ok && dispatch({ type: 'SET_PROFILE', payload: data.profile }))
      .catch(console.log);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default FormRegister;
