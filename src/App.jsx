import ThreeScene from "./components/ThreeScene";
// Components
import Camera from "./components/Camera";
import Texture from "./components/Texture";
// Controls
import { MapControls } from '@react-three/drei'
// React
import { Suspense } from "react";
// CSS
import './App.css'


const App = () => {
  return (
    <div style={{ height: '100vh', overflow:'hidden' }}>
      <ThreeScene>
        <Camera />
        <color attach='background' args={['#fdfbef']}/>
        <Suspense>
          <Texture position={[0,0,-5]} num='13'/>
          <Texture position={[-2,0,-1]} num='17'/>
          <Texture position={[1,-.16,1]} num='12'/>
          <Texture position={[-0.7,0,5]} num='14'/>
        </Suspense>
        <MapControls />
      </ThreeScene>
    </div>
  );
}

export default App;