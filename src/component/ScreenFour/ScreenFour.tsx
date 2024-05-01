import './ScreenFour.scss'
import MenuBox from '../MenuBox/MenuBox.tsx'

function ScreenFour() {
  return (
    <>
      <MenuBox title={`Gogyo\n Menu`} content={`$20 per person.\nPre-order your food to receive it on time.`} buttonLabel="View menu" />
      <MenuBox title="Karaoke playlist" content="Please pre-select a song to play so we can prepare a playlist in advance." buttonLabel="Add a song" />
      <MenuBox title={`Team\n t-shirts`} content={`Each shirt costs $40.\nThese are optional and must be ordered a week ahead.`} buttonLabel="Order a shirt" />
    </>
  )
}

export default ScreenFour
