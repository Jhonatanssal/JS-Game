const api = (() => {
  const socresList = async () => {
    try {
      const scores = await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6TXhIy7RINUnPNtbAvct/scores`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
        }
      );
      return scores.json();
    } catch(error) {
      return error.json();
    }
  };

  const submit = async (name, score) => {
    try {
      const score = await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6TXhIy7RINUnPNtbAvct/scores`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            user: name,
            score: Number(score)
          }),
        },
      );
      return score.json();
    } catch(error) {
      return error.json();
    }
  };
  return { socresList, submit };
})();

export default api;