import './Styles/Game-page.css';
import React from 'react';

import { useState } from 'react';
import RollDice from './Roll-dice';

const Game = () => {

const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState();
  const [computerNum, setComputerNum] = useState(); // GLOBAL within Game component

  const handleClick = (e) => {
    const selected = parseInt(e.target.innerText);
    setSelectedNumber(selected);

   
  };
  
 
  
  return (
    <section>
      <div className="container mt-5">
        <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="score-sec">
                            <div className="score fw-medium">0</div>
                            <div className="score-para fw-medium">Total Score</div>
                        </div>
                    </div>
                    <div className="col-6 mt-3">
                        <div className="error-msg d-none text-end pb-2 text-danger">You Have Not Selected Any Number</div>
                        <div className="draw-options d-flex row">
                            <div onClick={handleClick} className="option-1 btn option col-lg-2 rounded-0 col-4 btn-outline-dark " >1</div>
                            <div onClick={handleClick} className="option-2 option btn rounded-0 col-lg-2 col-4 btn-outline-dark " >2</div>
                            <div onClick={handleClick} className="option-3 option btn rounded-0 col-lg-2 col-4 btn-outline-dark " >3</div>
                            <div onClick={handleClick} className="option-4 option btn rounded-0 col-lg-2 col-4 btn-outline-dark " >4</div>
                            <div onClick={handleClick} className="option-5 option btn rounded-0 col-lg-2 col-4 btn-outline-dark " >5</div>
                            <div onClick={handleClick} className="option-6 option btn rounded-0 col-lg-2 col-4 btn-outline-dark " >6</div>
                        </div>
                        <div className="draw-para text-end fw-bold py-2">Select Number</div>
                    </div>
                </div>
            </div>
        </div>
        <RollDice
        computerNum={computerNum}
        selectedNumber={selectedNumber}
        setCurrentDice={setCurrentDice}
        setComputerNum={setComputerNum}
      />

        </section>
        
    )
}

 


export const diceRoll = (selected, setCurrentDice, setComputerNum) => {
  let newComputerNum = Math.floor(Math.random() * 6) + 1;
  console.log('Computer Number is:', newComputerNum);

  setCurrentDice(newComputerNum);
  setComputerNum(newComputerNum);

  console.log("Selected number:", selected);

  if (selected === newComputerNum) {
    console.log("🎉 You win!");
  } else {
    console.log("❌ You lose!");
  }
};

export const Result = () => {
  const num = computerNum;
  return num;
};

export default Game;




















