import './App.css'
import ScreenOne from './component/ScreenOne/ScreenOne.tsx'
import ScreenTwo from './component/ScreenTwo/ScreenTwo.tsx'

function App() {
  return (
    <>
      <div className="screen">
        <ScreenOne />
      </div>
      <div className="screen">
        <ScreenTwo />
      </div>
    </>
  )
}

export default App
