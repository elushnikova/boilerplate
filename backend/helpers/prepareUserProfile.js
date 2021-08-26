/**
 * Подготовить объект профиля с минимумом необходимой информации.
 * @param {object} user Объект пользователя из БД.
 * @param {number} user.id
 * @param {string} user.email
 * @returns {Profile} Объект профиля для хранения на клиенте.
 */
function prepareUserProfile({ id, email }) {
  return { id, email };
}

module.exports = prepareUserProfile;
