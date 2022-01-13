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

// Initiala värden för att kunna återställa allt
const initialValues = {
  count: 0,
  amountPerClick: 1,
}

// Behållare som ändras
let count;
let amountPerClick;

// Substraherar eller adderar per klick
const updateCounter = (type) => {
  switch (type) {
    case "substract":
      count = count - amountPerClick;
      countDisplay.innerHTML = count;
      break;

    case "add":
      count = count + amountPerClick;
      countDisplay.innerHTML = count;
      break;

    default:
      break;
  }
};

// Skapa event-lyssnare som reagerar på knapptryck!
// Uppdatera räknaren med -
substractButton.addEventListener("click", () => updateCounter("substract"));

// Uppdatera räknaren med +
addButton.addEventListener("click", () => updateCounter("add"));

//Återställ allt till intiala värden
resetButton.addEventListener("click", () => setInitialValues(initialValues));

// Uppdatera summa per klick med angivet värde
amountPerClickInput.addEventListener(
  "input",
  (event) => (amountPerClick = +event.target.value)
);

// Funktion som sätter upp alla nödvändiga värden
const setInitialValues = (values) => {
  count = values.count;
  countDisplay.innerHTML = values.count;
  amountPerClick = values.amountPerClick;
  amountPerClickInput.value = values.amountPerClick;
};

// Initiera räknaren
setInitialValues(initialValues);
