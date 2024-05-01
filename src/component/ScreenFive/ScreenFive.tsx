import './ScreenFive.scss'
import Button from '../Button/Button.tsx'
import illustration from '../../assets/images/fifth_screen_image.png'

function ScreenFive() {
  return (
    <>
      <div className="title animation-bottom-up-text hidden">
        Our Karaoke Theme is <br />
        <span className="purple">the '90s!</span>
      </div>
      <div className="content animation-bottom-up-text hidden">
        Think such nostalgic, heart-warming hits as:<br />
        <ul>
          <li>My Bop</li>
          <li>Wasabi Blues</li>
          <li>Be Mine Once More</li>
        </ul>
        Please pre-select a song to play so we can prepare a playlist in advance.
        <Button buttonContainerClass="content-button animation-bottom-up-button hidden" label="Add a song" />
      </div>
      <div className="illustration">
        <img className="hidden" src={illustration} alt="Illustration" />
      </div>
    </>
  )
}

export default ScreenFive
