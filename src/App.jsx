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
  return (
    <div style={{ height: '100vh', overflow:'hidden' }}>
      <ThreeScene>
        <Stats />
        <Camera />
        <color attach='background' args={['#fff']}/>
        <Suspense>
          <Peregrino position={[-1,0,-.8]} num='13'/>
          <Peregrino position={[0,0,-.8]} num='17'/>
          <Peregrino position={[1,0,-.8]} num='12'/>
          <Peregrino position={[-1,0,1]} num='14'/>
          <Peregrino position={[0,0,1]} num='7'/>
          <Peregrino position={[1,0,1]} num='50'/>
        </Suspense>
        <directionalLight />
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