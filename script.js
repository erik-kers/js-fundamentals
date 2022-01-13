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
  countHistory: [],
}

// Behållare som ändras
let count;
let amountPerClick;
let countHistory = [];

/* 
* Genererar en FizzBuzz-sträng från en array av siffor och returnerar denna
* @param {number[]} numbers
* @returns {string}
*/
const generateFizzbuzzString = (numbers) => {
  // kasta ett fel och stoppa hela scriptet om du skickar in fel datatyp.
  if (!Array.isArray(numbers)) {
    throw new Error('Du måste skicka in en array!')
  }
  // Om numbers är tom, returnera en sträng som säger det
  if (!numbers.length) {
    return "Här var det tomt!";
  }

  const fizzBuzzArray = numbers.map((number) => {
    // output börjar som en tom sträng.
    let output = "";

    if (number % 3 === 0) {
      // om återstoden av x / 3 lägg till ordet Fizz till output
      output += "Fizz";
    }
    if (number % 5 === 0) {
      // om återstoden av x / 5 lägg till ordet Buzz till output
      output += "Buzz";
    }

    // Returnera output OM den inte är en tom sträng, annars siffran som gick in.
    return output || number;
  });

  /* 
  *Ta FizzBuzz arrayen:
  * slå ihop till en sträng där varje element har separerats med ', ';
  * Returnera strängen
  */
  return fizzBuzzArray.join(", ");
};

// Substraherar eller adderar per klick
const updateCounter = (type) => {
  switch (type) {
    case "substract":
      count = count - amountPerClick;
      countDisplay.innerHTML = count;
      countHistory.push(count);
      fizzBuzzContainer.innerHTML = generateFizzbuzzString(countHistory);
      break;

    case "add":
      count = count + amountPerClick;
      countDisplay.innerHTML = count;
      countHistory.push(count);
      fizzBuzzContainer.innerHTML = generateFizzbuzzString(countHistory);
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

// Dölj och visa fizzBuzz-containern samt ändra på knappens text
toggleFizzBuzzButton.addEventListener("click", () => {
  const isVisible = fizzBuzzContainer.style.display === "block";

  if (isVisible) {
    toggleFizzBuzzButton.innerHTML = "Visa FizzBuzz";
    fizzBuzzContainer.innerHTML = "";
    fizzBuzzContainer.style.display = "none";
  } else {
    toggleFizzBuzzButton.innerHTML = "Dölj FizzBuzz";
    fizzBuzzContainer.innerHTML = generateFizzbuzzString(countHistory);
    fizzBuzzContainer.style.display = "block";
  }
});

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

  countHistory = [...values.countHistory];
  fizzBuzzContainer.innerHTML = generateFizzbuzzString(countHistory);
};

// Initiera räknaren
setInitialValues(initialValues);
