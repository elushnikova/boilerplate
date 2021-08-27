/**
 * Подготовить объект профиля с минимумом необходимой информации.
 * @param {object} user Объект пользователя из БД.
 * @param {number} user.id
 * @param {string} user.email
 * @param {boolean} user.isAdmin
 * @returns {Profile} Объект профиля для хранения на клиенте.
 */
function prepareUserProfile({ id, email, isAdmin }) {
  return { id, email, isAdmin };
}

module.exports = prepareUserProfile;
