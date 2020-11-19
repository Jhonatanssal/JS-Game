import LocalStorage from '../src/Js/localStorage';

describe('Testing local storage', () => {
  it('saves information in localStorage', () => {
    LocalStorage.saveScore('Test');
    expect(JSON.parse(localStorage.getItem('score'))).toBe('Test');
  });

  it('returns data from localStorage', () => {
    localStorage.getItem('score', JSON.stringify('Test'));
    expect(JSON.parse(localStorage.getItem('score'))).toBe('Test');
  });
});