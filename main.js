//VARIABLES AND CONSTANTS
const numberCardPrinted = document.getElementById("numberCardPrinted"),
    dateExpPrinted = document.getElementById("dateExpPrinted"),
    nameCardPrinted = document.getElementById("nameCardPrinted"),
    numCard = document.getElementById("numCard"),
    dateExpCard = document.getElementById("dateExpCard"),
    nameCard = document.getElementById("nameCard"),
    cvv = document.getElementById("cvv"),
    addCard = document.getElementById("addCard"),
    cancel = document.getElementById("cancel");


//FUNCTIONS
/* function printInCard() {
    printNumber();
    printDate();
    printName()
} */

function printNumber() {
    numberCardPrinted.textContent = numCard.value;
} 

function printDate() {
    dateExpPrinted.textContent = dateExpCard.value;
}

function printName() {
    nameCardPrinted.textContent = nameCard.value.toUpperCase();
} 



//EVENTS
numCard.addEventListener('keyup', printNumber);
dateExpCard.addEventListener('change', printDate);
nameCard.addEventListener('keyup', printName);
addCard.addEventListener('click', printInCard);