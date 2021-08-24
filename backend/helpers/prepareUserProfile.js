/**
 * Подготовить объект профиля с минимумом необходимой информации.
 * @param {object} user объект пользователя из БД.
 * @param {number} user.id
 * @param {string} user.email
 * @returns {Profile} объект профиля для хранения на клиенте.
 */
function prepareUserProfile({ id, email }) {
  return { id, email };
}

module.exports = prepareUserProfile;
