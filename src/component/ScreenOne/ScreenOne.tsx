import './ScreenOne.scss'
import Button from '../Button/Button.tsx'
import illustrationFirst from '../../assets/images/first_screen_image.png'

function ScreenOne() {
  return (
    <div className="screen-one">
      <div className="screen-one__left">
        <div className="logo-container">
          <div className="logo-image rhombus">
            <div className="square">
              <div className="circle" />
            </div>
          </div>
          <span className="logo-text">Supra<br /> Peritum Co.</span>
        </div>
        <div className="title">
          <div className="purple">Oodles of <br /> Noodles</div>
          Celebration
        </div>
        <Button label="Calender Invite" />
      </div>
      <div className="screen-one__right">
        <img src={illustrationFirst} alt="Illustration" />
      </div>
    </div>
  )
}

export default ScreenOne
