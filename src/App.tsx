import { OrbitControls, Stars, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Pipe from './components/Pipe';
import { ServicesContext } from './context/ServicesContext/Context';
import { SocketContext } from './context/WebsocketContext/Context';

const App = () => {
  const ContextBridge = useContextBridge(SocketContext, ServicesContext);

  return (
    <div className="app">
      <div className="header">This is the header</div>
      <div className="content">
        <Canvas>
          <ContextBridge>
            <OrbitControls />
            <Stars />
            <Pipe />
            <mesh position={[-2, 0, 0]}>
              <cylinderBufferGeometry attach="geometry" />
              <meshLambertMaterial attach="material" color="hotpink" />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <cylinderBufferGeometry attach="geometry" />
              <meshLambertMaterial attach="material" color="hotpink" />
            </mesh>
            <mesh position={[2, 0, 0]}>
              <cylinderBufferGeometry attach="geometry" />
              <meshLambertMaterial attach="material" color="hotpink" />
            </mesh>
            <mesh position={[4, 0, 0]}>
              <cylinderBufferGeometry attach="geometry" />
              <meshLambertMaterial attach="material" color="hotpink" />
            </mesh>
            <mesh position={[-4, -2, 0]}>
              <cylinderBufferGeometry attach="geometry" />
              <meshLambertMaterial attach="material" color="hotpink" />
            </mesh>
          </ContextBridge>
        </Canvas>
      </div>
    </div>
  );
};

export default App;
