/**
 * Контроллер главной страницы.
 * При наличии сессии возвращает ответ, иначе отправляет ответ ошибки с просьбой авторизоваться.
 * @todo Вынести формирование ответа в отдельную вспомогательную функцию (см. prepareAuthResult)?
 * @todo Вынести отправку ответа в отдельную вспомогательную функцию (см. initAuthResponder)?
 */
function handleHome(req, res) {
  if (!req.session.profile) {
    return res
      .status(401)
      .json({ ok: false, message: 'Please, authenticate' });
  }

  return res.json({ ok: true, message: 'Hello, world' });
}

module.exports = handleHome;
