import './ScreenSeven.scss'
import illustration from '../../assets/images/seventh_screen_image.png'

function ScreenSeven() {
  return (
    <div className="screen-seven">
      <div className="illustration">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="question">
        Questions?
      </div>
      <div className="contract">
        Reach out to:<br />
        <b>@BaoPG</b>
      </div>
    </div>
  )
}

export default ScreenSeven
