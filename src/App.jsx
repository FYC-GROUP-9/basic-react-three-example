import {OrbitControls} from "@react-three/drei";
import './App.css'
import {Canvas} from "@react-three/fiber";
import Cube from "./components/Cube.jsx";

function App() {

  return (
    <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Cube color={"green"}/>
        <OrbitControls />
    </Canvas>
  )
}

export default App
