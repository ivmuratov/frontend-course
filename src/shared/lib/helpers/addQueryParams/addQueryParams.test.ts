import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  it('test with one param', () => {
    const params = getQueryParams({
      primary: 'value',
    });
    expect(params).toBe('?primary=value');
  });
  it('test with multiple param', () => {
    const params = getQueryParams({
      primary: 'value',
      second: 'value2',
    });
    expect(params).toBe('?primary=value&second=value2');
  });
  it('test with undefined', () => {
    const params = getQueryParams({
      primary: 'value',
      second: undefined,
    });
    expect(params).toBe('?primary=value');
  });
});
