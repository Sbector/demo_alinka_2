import ThreeScene from "./components/ThreeScene";
// Components
import Camera from "./components/Camera";
import Controls from "./components/Controls";
import Peregrino from "./components/Peregrino";

// Controls
import { Stats } from '@react-three/drei'
import { Loader } from '@react-three/drei'
// React
import { Suspense } from "react";
// CSS
import './App.css'


const App = () => {
  const numeros = []
  const suma = () => {
    for(let i = 1; i<73; i ++){
      numeros.push(i)
    }
  }
  suma()

  return (
    <div style={{ height: '100vh', overflow:'hidden' }}>
      <ThreeScene>
        <Stats />
        <Camera />
        <color attach='background' args={['#fff']}/>
        <Suspense>
          {
            numeros.map((numero)=> {
              const id = numero
              return(
              <Peregrino key={id} posX={numero-36.5} posY={0} posZ={0} num={id}/>
              )
            })
          } 
        </Suspense>
        <Controls />   
      </ThreeScene>
      <Loader/>
      <div className="Title">
        <h1>Road to Tepeyac (demo)</h1>
        <h2>Alinka Echeverría</h2>
      </div>
    </div>
  );
}

export default App;