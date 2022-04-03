import ThreeScene from "./components/ThreeScene";
// Components
import Camera from "./components/Camera";
import Controls from "./components/Controls";
import Peregrino from "./components/Peregrino";

// Controls
import { Stats } from '@react-three/drei'
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
  console.log(numeros)

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
              <Peregrino position={[id-36.5,0,-.2]} num={id}/>
              )
            })
          }
          
        </Suspense>
        <Controls />
      </ThreeScene>
      <div className="Title">
        <h1>Road to Tepeyac (demo)</h1>
        <h2>Alinka Echeverría</h2>
      </div>
    </div>
  );
}

export default App;