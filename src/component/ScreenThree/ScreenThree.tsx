import './ScreenThree.scss';
import illustrationThird from '../../assets/images/third_screen_image.png'
import Button from '../Button/Button.tsx'

function ScreenThree() {
  return (
    <div className="screen-three">
      <div className="screen-three__left">
        <img src={illustrationThird} alt="Illustration" />
      </div>
      <div className="screen-three__right">
        <div className="time_and_location_text">
          15 - 17 Aug 2025<br />
          6 PM Onwards<br />
          Buckville Park<br />
        </div>
        <Button label="Add to calendar" />
      </div>
    </div>
  )
}

export default ScreenThree
