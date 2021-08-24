/**
 * @global @typedef AuthResultData
 * Тело ответа на запрос аутентификации.
 * @type {object}
 * @property {boolean} ok Успешно ли прошёл запрос аутентификации.
 * @property {Profile|undefined} profile Профиль пользователя в успешном случае.
 * @property {string|undefined} message Текст ошибки в провальном случае.
 * @property {string|undefined} email Включается в тело ответа при попытке зарегистрировать уже существующий в БД email.
 * @todo Изменить `ok` на объект `error` с полем `message` и дополнительными полями.
 * @todo Изменить `undefined` на `null`.
 */

/**
 * @global @typedef Profile
 * Данные пользователя для хранения на клиенте с минимумом необходимой информации.
 * @property {number} id
 * @property {string} email
 * @todo Добавить поле имени или юзернейма в БД и возвращать их вместо email.
 */

/**
 * @global @typedef Action
 * Объект действия для reducer-функции.
 * @property {string} type Тип действия.
 * @property {any} payload Данные для записи в состояние.
 */