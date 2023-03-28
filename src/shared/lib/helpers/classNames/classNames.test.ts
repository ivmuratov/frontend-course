import { classNames } from 'shared/lib/helpers/classNames/classNames';

describe('classNames', () => {
  it('with one param', () => {
    expect(classNames('class')).toBe('class');
  });

  it('with additional', () => {
    const expected = 'class class1 class2';
    expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected);
  });

  it('with mods', () => {
    const expected = 'class class1 class2 foo bar';
    expect(classNames('class', { foo: true, bar: true }, ['class1', 'class2'])).toBe(expected);
  });

  it('with mods false', () => {
    const expected = 'class class1 class2 foo';
    expect(classNames('class', { foo: true, bar: false }, ['class1', 'class2'])).toBe(expected);
  });

  it('with mods undefined', () => {
    const expected = 'class class1 class2 foo';
    expect(classNames('class', { foo: true, bar: undefined }, ['class1', 'class2'])).toBe(expected);
  });
});
