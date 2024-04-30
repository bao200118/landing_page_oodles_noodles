import './App.css'
import ScreenOne from './component/ScreenOne/ScreenOne.tsx'
import ScreenTwo from './component/ScreenTwo/ScreenTwo.tsx'
import ScreenThree from './component/ScreenThree/ScreenThree.tsx'
import ScreenFour from './component/ScreenFour/ScreenFour.tsx'

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
    </>
  )
}

export default App
