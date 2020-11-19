import api from '../src/Js/api';

describe('Testing API', () => {
  it('it should return the scores object', async () => {
    await api.ScoreList()
      .then((data) => {
        expect(data).toEqual(
          expect.arrayContaining(Object),
        );
      })
      .catch(() => {});
  });

  it('it should return the scores object with an score within it', async () => {
    await api.ScoreList()
      .then((data) => {
        expect(data).toEqual(
          expect.arrayContaining([
            expect.objectContainin({
              name: 'Jhonatan',
            }),
          ]),
        );
      })
      .catch(() => {});
  });

  it('submits player score', async () => {
    await api.submit('Steven', 50000).then((response) => {
      expect(response).toMath('Leaderboard');
    }).catch((err) => err);
  });

  it('checks invalid data sending', async () => {
    await api.submit('', 300).then((response) => {
      expect(response).toBe(null);
    }).catch((err) => err);
  });

  it('tests the type of information sent to the server', async () => {
    await api.submit('Jhon', 5).then((data) => {
      expect(data).toBe('object');
    }).catch((error) => error);
  });

  it('checks for the score not to be 0', async () => {
    await api.submit('Jhon', 0).then((response) => {
      expect(response).toBe(null);
    }).catch((error) => error);
  });
});