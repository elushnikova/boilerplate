function checkPasswordMatch([user, isMatch]) {
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  return user;
}

module.exports = checkPasswordMatch;
