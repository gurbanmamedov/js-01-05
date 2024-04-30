const quotes = [
  "Моего друга сбила машина. Теперь он не друг, ведь друзья на дороге не валяются.",
  "Работа не волк. Волк - это ходить, работа - это ворк.",
  "Одна ошибка и ты ошибся.",
  "Если тебя оскорбляют за спиной, повернись.",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function changeQuote() {
  const quoteDisplay = document.querySelector("#quoteDisplay");
  const newQuote = getRandomQuote();
  quoteDisplay.textContent = newQuote;

  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  const textColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  quoteDisplay.style.color = textColor;
}

changeQuote();
setInterval(changeQuote, 5000);
