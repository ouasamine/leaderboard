import './style.css';
import Game from './game-calss.js';

const newGame = new Game();
const formUserInput = document.forms['new-score']['user-name'];
const formscoreInput = document.forms['new-score']['user-score'];
const submitBtt = document.querySelector('#add-score');
const refreshBtt = document.querySelector('#refresh');
const scoresList = document.querySelector('#list-column ul');
const messageContainer = document.querySelector('.message');

const diplayList = (scoresArray) => {
  scoresArray.forEach((arrayObj) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${arrayObj.user}: ${arrayObj.score}`;
    scoresList.append(listItem);
  });
};

newGame.getScores('scores/')
  .then((res) => res.json())
  .then((json) => {
    diplayList(json.result);
  });
submitBtt.addEventListener('click', (event) => {
  event.preventDefault();
  const userName = formUserInput.value;
  const userScore = formscoreInput.value;
  newGame.addScore('scores/', userName, userScore)
    .then(() => {
      messageContainer.innerText = 'The score has been successfully added';
      setTimeout(() => { messageContainer.innerText = ''; }, 10000);
    });
});

refreshBtt.addEventListener('click', () => {
  scoresList.innerHTML = '';
  newGame.getScores('scores/')
    .then((res) => res.json())
    .then((json) => {
      diplayList(json.result);
    });
});
