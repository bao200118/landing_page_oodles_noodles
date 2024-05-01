import './ScreenSeven.scss'
import illustration from '../../assets/images/seventh_screen_image.png'

function ScreenSeven() {
  return (
    <>
      <div className="illustration">
        <img className="hidden" src={illustration} alt="Illustration" />
      </div>
      <div className="question animation-bottom-up-text hidden">
        Questions?
      </div>
      <div className="contract animation-bottom-up-text hidden">
        Reach out to:<br />
        <b>@BaoPG</b>
      </div>
    </>
  )
}

export default ScreenSeven
