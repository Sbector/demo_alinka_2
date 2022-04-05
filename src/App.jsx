import ThreeScene from "./components/ThreeScene";
// Components
import Camera from "./components/Camera";
import Controls from "./components/Controls";
import Peregrinos from "./components/Peregrinos";

// Controls
import { Stats } from '@react-three/drei'
import { Loader } from '@react-three/drei'
// React
import { Suspense } from "react";
// CSS
import './App.css'


const App = () => {
  return (
    <div style={{ height: '100vh', overflow:'hidden' }}>
      <ThreeScene>
        <color attach='background' args={['#fff']}/>
        <Stats />
        <Camera />
        <Suspense>
        <Peregrinos />
        </Suspense>
        <Controls />   
        <Loader/>
      </ThreeScene>
      
      <div className="Title">
        <h1>Road to Tepeyac (demo)</h1>
        <h2>Alinka Echeverría</h2>
      </div>
    </div>
  );
}

export default App;