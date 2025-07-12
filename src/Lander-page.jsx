import './Lander-page.css'
import DicesImage from './Components/img/dices.svg';
import Button from './Components/Button';

function Lander() {

  
  return (
    <>
<div className="container">
  <div className="container-fluid">
    <div className="row min-vh-100">
      <div className="col-lg-6 col-12 d-flex justify-content-center  position-relative">
<div className="image ">
  <img src={DicesImage} alt="Dices-image" className='' />
</div>
      </div>
      <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
        <div className="btn-sec text-center">
          <h1 className="">DICE GAME</h1>
      <Button label="Play game" />

        </div>
        </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Lander;
