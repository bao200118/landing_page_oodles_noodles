import './ScreenSix.scss'
import MenuBox from '../MenuBox/MenuBox.tsx'

function ScreenSix() {
  const travelTogetherContent = <span>Please RSVP by <b>Wednesday 16th July</b></span>
  return (
    <div className="screen-six">
      <MenuBox tag="Travel Together" title="Company Bus 6pm Departure" content={travelTogetherContent}
               buttonLabel="RSVP" />
      <MenuBox tag="Travel Solo" title="$20 Taxi Allowance" content="See directions on reimbursement"
               buttonLabel="Add a song" />
    </div>
  )
}

export default ScreenSix
