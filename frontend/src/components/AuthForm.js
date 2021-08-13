import { useDispatch } from 'react-redux';

function FormRegister({ path, children }) {
  const dispatch = useDispatch();

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
      .catch(console.log);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">{children}</button>
    </form>
  );
}

export default FormRegister;
