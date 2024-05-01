import './App.scss'
import ScreenOne from './component/ScreenOne/ScreenOne.tsx'
import ScreenTwo from './component/ScreenTwo/ScreenTwo.tsx'
import ScreenThree from './component/ScreenThree/ScreenThree.tsx'
import ScreenFour from './component/ScreenFour/ScreenFour.tsx'
import ScreenFive from './component/ScreenFive/ScreenFive.tsx'
import ScreenSix from './component/ScreenSix/ScreenSix.tsx'
import ScreenSeven from './component/ScreenSeven/ScreenSeven.tsx'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const observable = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })
    const screenElement = document.querySelectorAll('.hidden');
    screenElement.forEach((el) => observable.observe(el))
  },[])
  return (
    <>
      <div className="screen screen-one">
        <ScreenOne />
      </div>
      <div className="screen screen-two">
        <ScreenTwo />
      </div>
      <div className="screen screen-three">
        <ScreenThree />
      </div>
      <div className="screen screen-four">
        <ScreenFour />
      </div>
      <div className="screen screen-five">
        <ScreenFive />
      </div>
      <div className="screen screen-six">
        <ScreenSix />
      </div>
      <div className="screen screen-seven">
        <ScreenSeven />
      </div>
    </>
  )
}

export default App
