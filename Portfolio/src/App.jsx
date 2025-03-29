import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Particles from "./Components/Particles"
import Fotter from "./Components/Fotter"


function App() {

  return (
    <div className={`lg:px-30 pt-4 lg:pt-12 overflow-x-hidden fullbody`} style={{zIndex:'-1'}}>

      <div style={{ width: '100%', height: '100%', position: 'absolute', top:'80px', zIndex: '0' }} >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
         />
      </div>
      <Navbar style={{zIndex:'20'}}/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Fotter />
    </div>
  )
}

export default App
