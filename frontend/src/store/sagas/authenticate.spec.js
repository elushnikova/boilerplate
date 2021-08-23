import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import Action from '../../helpers/classes/Action';
import fetchJson from '../../helpers/fetchJson';
import authenticate from './authenticate';

describe('authenticate', () => {
  const payload = { email: 'foo@bar', password: 'foobarbaz' };

  describe('login', () => {
    it('skips network request on invalid login payload, sets profile error', () => {
      const error = new Error('Must provide both email and password');

      return expectSaga(authenticate, Action.login({ foo: 'bar' }))
        .put(Action.setProfileError(error))
        .run();
    });

    it('sets profile data on successful login', () => {
      const fakeResponse = {
        ok: true,
        profile: { id: 123, email: 'foo@bar' },
      };

      return expectSaga(authenticate, Action.login(payload))
        .provide([
          [call.fn(fetchJson), fakeResponse],
        ])
        .put(Action.setProfileData(fakeResponse.profile))
        .run();
    });

    it('sets profile error on failed login', () => {
      const fakeResponse = {
        ok: false,
        message: 'Invalid email or password',
      };

      return expectSaga(authenticate, Action.login(payload))
        .provide([
          [call.fn(fetchJson), fakeResponse],
        ])
        .put(Action.setProfileError(new Error(fakeResponse.message)))
        .run();
    });

    it('sets profile error on failed network request for login', () => {
      const fakeError = new Error('Failed to fetch');

      return expectSaga(authenticate, Action.login(payload))
        .provide([
          [call.fn(fetchJson), throwError(fakeError)],
        ])
        .put(Action.setProfileError(fakeError))
        .run();
    });
  });

  describe('register', () => {
    it('skips network request on invalid registration payload, sets profile error', () => {
      const error = new Error('Must provide both email and password');

      return expectSaga(authenticate, Action.register({ foo: 'bar' }))
        .put(Action.setProfileError(error))
        .run();
    });

    it('sets profile data on successful registration', () => {
      const fakeResponse = {
        ok: true,
        profile: { id: 123, email: 'foo@bar' },
      };

      return expectSaga(authenticate, Action.register(payload))
        .provide([
          [call.fn(fetchJson), fakeResponse],
        ])
        .put(Action.setProfileData(fakeResponse.profile))
        .run();
    });

    it('sets profile error on failed registration', () => {
      const fakeResponse = {
        ok: false,
        message: 'Invalid email or password',
      };

      return expectSaga(authenticate, Action.register(payload))
        .provide([
          [call.fn(fetchJson), fakeResponse],
        ])
        .put(Action.setProfileError(new Error(fakeResponse.message)))
        .run();
    });

    it('sets profile error on failed network request for registration', () => {
      const fakeError = new Error('Failed to fetch');

      return expectSaga(authenticate, Action.register(payload))
        .provide([
          [call.fn(fetchJson), throwError(fakeError)],
        ])
        .put(Action.setProfileError(fakeError))
        .run();
    });
  });
});
