const diplayList = (scoresArray, domContainer) => {
  scoresArray.forEach((arrayObj) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${arrayObj.user}: ${arrayObj.score}`;
    domContainer.append(listItem);
  });
};

export default diplayList;