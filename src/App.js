import Footer from './Layout/Footer/Footer';
import Header from './Component/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Servicespage from './Pages/Servicespage';
import Solutionpage from './Pages/Solutionpage';
// Language change section start
import { useTranslation } from "react-i18next";
import { useCallback, useEffect } from 'react';
//particles implement
import Particles from "react-particles";
import { loadFull } from "tsparticles";


function App() {
  const { t } = useTranslation();
  useEffect(()=>{
localStorage.setItem("language", "en")
  },[])

      //particles implement
const particlesInit = useCallback(async engine => {
    // console.log(engine);
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/servicespage/:id' element={<Servicespage/>}/> 
          <Route path='/solutionpage/:id' element={<Solutionpage />} />
        </Routes>
 {/* particles section start here */}
        <div style={{
        width:'100wv',
        hieght:'100hv',
        position:'absolute',
        zIndex:-100
     }}>
     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#003333",
                    },
                    links: {
                        color: "#002633",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 2,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area:1500,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.4,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> 
     </div>
     
        <Footer />
      </BrowserRouter>   
  );
}

export default App;