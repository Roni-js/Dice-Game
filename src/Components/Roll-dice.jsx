import Button from './Button';
import Dice1 from './img/dice_1.svg';
import Dice2 from './img/dice_2.svg';
import Dice3 from './img/dice_3.svg';
import Dice4 from './img/dice_4.svg';
import Dice5 from './img/dice_5.svg';
import Dice6 from './img/dice_6.svg';
import { useState, useEffect } from 'react';
import { diceRoll } from './Game-page';

 const RollDice = ({ computerNum, selectedNumber, setCurrentDice, setComputerNum }) => {
  const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const [diceImg, setDiceImg] = useState(Dice1);

  useEffect(() => {
    if (computerNum) {
      setDiceImg(diceImages[computerNum - 1]);
    }
  }, [computerNum]);

  const showRules = () => {
    const ruleSec = document.getElementsByClassName('rule-sec')[0];
    if (ruleSec.classList.contains('d-none')) {
      ruleSec.classList.replace('d-none', 'd-block');
    } else {
      ruleSec.classList.replace('d-block', 'd-none');
    }
  };


  return (
    <section>

    <div className="container game-result-sec">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div className="dicesec w-25 d-flex flex-column justify-content-center align-items-center">
          <img src= {diceImg} alt="Dice 1" id='dice-img' onClick={() => diceRoll(selectedNumber, setCurrentDice, setComputerNum)}/>
          <h2 className='img-para mt-2'>Click On Dice To Roll</h2>
          <div className="brn-sec d-flex flex-column justify-content-center align-items-center gap-4">
            <Button label={'Reset Score'}  className="btn-outline-dark" />
          <Button label={'Show Rules'} 
          onClick={showRules}/>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>

 <div className="container rule-sec  d-none">
    <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 d-flex justify-content-center flex-column">
                <h2 className='img-para mt-2 fw-bolder pt-2'>How to play dice game</h2>
                <p className='img-para mt-3'>Select any number</p>
                <p className='img-para '>Click on dice image</p>
                <p className='img-para '>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p className='img-para '>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </div>
    </div>
 </div>
    
        </section>
      
    )
 }

 export default RollDice;