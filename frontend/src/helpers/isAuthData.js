function isAuthData(payload) {
  const hasEmail = Object.prototype.hasOwnProperty.call(payload, 'email');
  const hasPassword = Object.prototype.hasOwnProperty.call(payload, 'password');
  const hasBothFields = hasEmail && hasPassword;

  const emailNonEmpty = Boolean(payload.email);
  const passwordNonEmpty = Boolean(payload.password);
  const fieldsNonEmpty = emailNonEmpty && passwordNonEmpty;

  const emailIsString = typeof payload.email === 'string';
  const passwordIsString = typeof payload.password === 'string';
  const fieldsAreStrings = emailIsString && passwordIsString;

  return hasBothFields && fieldsNonEmpty && fieldsAreStrings;
}

export default isAuthData;
