import fetchJson from './fetchJson';

jest.spyOn(global, 'fetch');

describe('fetchJson', () => {
  beforeEach(() => {
    fetch.mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ ok: true }),
    }));
  });

  it('fetches base url, if no path given', async () => {
    await fetchJson();
    expect(fetch.mock.calls[0][0]).toBe('http://localhost:4000/api');
  });

  it('includes credentials, even if no options given', async () => {
    await fetchJson();
    expect(fetch.mock.calls[0][1].credentials)
      .toBe('include');
  });

  it('uses env variable as baseUrl, if provided', async () => {
    process.env.REACT_APP_API_URL = 'http://foo.bar';
    await fetchJson();
    delete process.env.REACT_APP_API_URL;

    expect(fetch.mock.calls[0][0])
      .toBe('http://foo.bar');
  });

  it('concatenates given path to baseUrl', async () => {
    await fetchJson('/foo');
    expect(fetch.mock.calls[0][0])
      .toBe('http://localhost:4000/api/foo');
  });

  it('throws if given path is not a string', () => {
    expect(() => fetchJson(123))
      .toThrow('Must provide string as path');
  });

  it('passes all keys from given options', async () => {
    await fetchJson('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pew: 'pow' }),
      foo: 'bar',
    });
    expect(fetch.mock.calls[0][1].foo).toBe('bar');
    expect(fetch.mock.calls[0][1].headers).toEqual({ 'Content-Type': 'application/json' });
    expect(fetch.mock.calls[0][1].body).toBe(JSON.stringify({ pew: 'pow' }));
    expect(fetch.mock.calls[0][1].method).toBe('POST');
  });

  afterAll(() => {
    fetch.mockRestore();
  });
});
