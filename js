let itemsInCart = 0;
let hideMessage;

const count = document.getElementById('cartCount');
const message = document.getElementById('message');

function showMessage(text) {
  message.textContent = text;
  message.classList.add('visible');
  clearTimeout(hideMessage);
  hideMessage = setTimeout(function () {
    message.classList.remove('visible');
  }, 2200);
}

document.querySelectorAll('.add-button').forEach(function (button) {
  button.addEventListener('click', function () {
    itemsInCart = itemsInCart + 1;
    count.textContent = itemsInCart;
    showMessage(button.dataset.name + ' added to cart');
  });
});

document.getElementById('searchButton').addEventListener('click', function () {
  const words = document.getElementById('searchInput').value;
  showMessage('Searching for: ' + (words || 'all products'));
});
