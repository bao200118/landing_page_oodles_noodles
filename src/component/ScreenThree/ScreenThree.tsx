import './ScreenThree.scss';
import illustrationThird from '../../assets/images/third_screen_image.png'
import Button from '../Button/Button.tsx'

function ScreenThree() {
  return (
    <>
      <div className="screen-three__left">
        <img className="hidden" src={illustrationThird} alt="Illustration" />
      </div>
      <div className="screen-three__right">
        <div className="title animation-bottom-up-text hidden">
          15 - 17 Aug 2025<br />
          6 PM Onwards<br />
          Buckville Park<br />
        </div>
        <Button buttonContainerClass="animation-bottom-up-button hidden" label="Add to calendar" />
      </div>
    </>
  )
}

export default ScreenThree
