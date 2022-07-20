const listDice = ["dice1.png", "dice2@2x.png", "dice3@2x.png", "dice4@2x.png", "dice5@2x.png", "dice6@2x.png"];
const dice1 = document.querySelector(".dice-1");
const dice2 = document.querySelector("#dice-2");
const button = document.querySelector(".roll-dice");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function render(el, value) {
    el.src = `./images/${listDice[value]}`;
}

button.addEventListener(`click`, () => {
    render(dice1, getRandomIntInclusive(0, 5));
    render(dice2, getRandomIntInclusive(0, 5));
});