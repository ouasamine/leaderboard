class Game {
  constructor() {
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AILK8GYEBS5QEfR1WfuU/';
  }

  addScore(endPoint, userName, userScore) {
    const userObj = { user: userName, score: userScore };
    const fetchingURL = this.baseURL + endPoint;

    fetch(fetchingURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  getScores(endPoint) {
    const fetchingURL = this.baseURL + endPoint;

    fetch(fetchingURL)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}

