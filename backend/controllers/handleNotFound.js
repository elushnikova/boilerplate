/**
 * Контроллер обработки непрописанных маршрутов.
 * Перенаправляет на корневой маршрут.
 */
function handleNotFound(_, res) {
  res.redirect('/api');
}

module.exports = handleNotFound;
