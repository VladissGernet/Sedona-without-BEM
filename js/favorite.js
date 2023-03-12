let favoriteButtons = document.querySelectorAll('.favorite-button');
let favoriteHeader = document.querySelector('.favorite-icon-value')

for (let favoriteButton of favoriteButtons) {
  favoriteButton.onclick = function (evt) {
    if (favoriteButton.classList.contains('blue-button')) {
      favoriteButton.classList.remove('blue-button');
      favoriteButton.classList.add('green-button');
      favoriteButton.textContent = 'В избранном';
      favoriteHeader.textContent++;
    } else {
      favoriteButton.classList.remove('green-button');
      favoriteButton.classList.add('blue-button');
      favoriteButton.textContent = 'В избранное';
      favoriteHeader.textContent--;
    }
  }
};


