import './App.css'
import ScreenOne from './component/ScreenOne/ScreenOne.tsx'
import ScreenTwo from './component/ScreenTwo/ScreenTwo.tsx'
import ScreenThree from './component/ScreenThree/ScreenThree.tsx'
import ScreenFour from './component/ScreenFour/ScreenFour.tsx'
import ScreenFive from './component/ScreenFive/ScreenFive.tsx'
import ScreenSix from './component/ScreenSix/ScreenSix.tsx'
import ScreenSeven from './component/ScreenSeven/ScreenSeven.tsx'

function App() {
  return (
    <>
      <div className="screen">
        <ScreenOne />
      </div>
      <div className="screen">
        <ScreenTwo />
      </div>
      <div className="screen">
        <ScreenThree />
      </div>
      <div className="screen">
        <ScreenFour />
      </div>
      <div className="screen">
        <ScreenFive />
      </div>
      <div className="screen">
        <ScreenSix />
      </div>
      <div className="screen">
        <ScreenSeven />
      </div>
    </>
  )
}

export default App
