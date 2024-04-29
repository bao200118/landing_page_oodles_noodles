import './App.css'
import ScreenOne from './component/ScreenOne/ScreenOne.tsx'
import ScreenTwo from './component/ScreenTwo/ScreenTwo.tsx'
import ScreenThree from './component/ScreenThree/ScreenThree.tsx'

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
    </>
  )
}

export default App
