import createAction from './createAction';

describe('createAction', () => {
  it('creates action object with type', () => {
    const action = createAction('TEST_ACTION');
    expect(action.type).toBe('TEST_ACTION');
  });

  it('throws if no type is provided', () => {
    expect(() => createAction())
      .toThrow('Must provide action type');
  });

  it('throws is provided type is not a string', () => {
    expect(() => createAction(1))
      .toThrow('Must provide string as action type');
  });

  it('creates action without payload, if none provided', () => {
    const action = createAction('TEST_ACTION');
    const hasOwnPayload = Object.prototype.hasOwnProperty.call(action, 'payload');
    expect(hasOwnPayload).toBe(false);
    expect(action.payload).toBe(undefined);
  });

  it('creates action with payload, if provided', () => {
    const action = createAction('TEST_ACTION', 'test payload');
    expect(action.payload).toBe('test payload');
  });
});
