import ThreeScene from "./components/ThreeScene";
// Components
import Sphere from "./components/Sphere";
import Camera from "./components/Camera";
// Three.js
import { MapControls } from '@react-three/drei'
// CSS
import './App.css'


const App = () => {
  return (
    <div style={{ height: '100vh', overflow:'hidden' }}>
      <ThreeScene>
        <Camera />
        <color attach='background' args={['#fdfbef']}/>
        <Sphere color='#f00' position={[-3,0,0]} rotation={Math.PI/4}/>
        <Sphere color='#0f0' position={[0,0,0]} rotation={Math.PI/4}/>
        <Sphere color='#00f' position={[3,0,0]} rotation={Math.PI/4}/>
        <ambientLight />
        <MapControls />
      </ThreeScene>
    </div>
  );
}

export default App;