import './ScreenFour.scss'
import MenuBox from '../MenuBox/MenuBox.tsx'

function ScreenFour() {
  return (
    <div className="screen-four">
      <MenuBox title="Gogyo Menu" content="$20 per person. Pre-order your food to receive it on time." buttonLabel="View menu" />
      <MenuBox title="Karaoke playlist" content="Please pre-select a song to play so we can prepare a playlist in advance." buttonLabel="Add a song" />
      <MenuBox title="Team t-shirts" content="Each shirt costs $40. These are optional and must be ordered a week ahead." buttonLabel="Order a shirt" />
    </div>
  )
}

export default ScreenFour
