import { useState } from "react";
import img_dice1 from "./dice1.png";
import img_dice2 from "./dice2@2x.png";
import img_dice3 from "./dice3@2x.png";
import img_dice4 from "./dice4@2x.png";
import img_dice5 from "./dice5@2x.png";
import img_dice6 from "./dice6@2x.png";
function DomDice() {
  const listDice = [img_dice1, img_dice2, img_dice3, img_dice4, img_dice5, img_dice6];
  const [dice1, setDice1] = useState(listDice[0]);
  const [dice2, setDice2] = useState(listDice[2]);
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rollDice = () => {
    setDice1(listDice[getRandomIntInclusive(0, 5)]);
    setDice2(listDice[getRandomIntInclusive(0, 5)]);
  };
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/diceeLogo@2x.png" alt="" />
        </div>
        <div className="list-dice">
          <img className="dice-1" src={dice1} alt="" />
          <img id="dice-2" src={dice2} alt="" />
        </div>
        <button className="roll-dice" onClick={rollDice}>
          Roll Dice
        </button>
      </div>
    </>
  );
}
export default DomDice;
