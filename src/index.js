import '../modules/style.css';
import Game from '../modules/game-calss.js';
import displayList from '../modules/display-funtion.js';

const newGame = new Game();
const formUserInput = document.forms['new-score']['user-name'];
const formscoreInput = document.forms['new-score']['user-score'];
const submitBtt = document.querySelector('#add-score');
const refreshBtt = document.querySelector('#refresh');
const scoresList = document.querySelector('#list-column ul');
const messageContainer = document.querySelector('.message');

newGame.getScores('scores/')
  .then((res) => res.json())
  .then((json) => {
    displayList(json.result, scoresList);
  });
submitBtt.addEventListener('click', (event) => {
  event.preventDefault();
  const userName = formUserInput.value;
  const userScore = formscoreInput.value;
  newGame.addScore('scores/', userName, userScore)
    .then((response) => {
      if (response.status !== 400) {
        messageContainer.innerText = 'The score has been successfully added';
        setTimeout(() => { messageContainer.innerText = ''; }, 10000);
      } else {
        messageContainer.innerText = 'The score can\'t be added please check your inputs';
        messageContainer.style.color = 'red';
        setTimeout(() => { messageContainer.innerText = ''; }, 10000);
      }
    });
});

refreshBtt.addEventListener('click', () => {
  scoresList.innerHTML = '';
  newGame.getScores('scores/')
    .then((res) => res.json())
    .then((json) => {
      displayList(json.result, scoresList);
    });
});
