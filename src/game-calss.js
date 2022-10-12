export default class Game {
  constructor() {
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nzDrB2XK4pV4ZKmFENCc/';
  }

  async addScore(endPoint, userName, userScore) {
    const userObj = { user: userName, score: userScore };
    const fetchingURL = this.baseURL + endPoint;

    const result = await fetch(fetchingURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(userObj),
    });
    return result;
  }

  async getScores(endPoint) {
    const fetchingURL = this.baseURL + endPoint;
    const result = await fetch(fetchingURL);
    return result;
  }
}
