// Hämta element och spara i variabler
const countDisplay = document.getElementById("counter__count");
const substractButton = document.getElementById("counter__buttons__substract");
const addButton = document.getElementById("counter__buttons__add");
const amountPerClickInput = document.getElementById(
  "counter__input__amount-per-click"
);
const toggleFizzBuzzButton = document.getElementById(
  "counter__buttons__toggle-fizz-buzz"
);
const resetButton = document.getElementById("counter__buttons__reset");
const fizzBuzzContainer = document.getElementById(
  "counter__fizz-buzz-container"
);

// Ändra innehållet i count display!
countDisplay.innerHTML = 'Här ska det vara siffror!'


// Testa skapa en event-lyssnare för en knapp!
addButton.addEventListener('click', () => console.log('click'));
