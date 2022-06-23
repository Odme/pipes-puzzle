import { OrbitControls, Stars, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Content } from './components/Content';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import Pipe from './components/Pipe';
import { ServicesContext } from './context/ServicesContext/Context';
import { SocketContext } from './context/WebsocketContext/Context';

const App = () => {
  const ContextBridge = useContextBridge(SocketContext, ServicesContext);

  return (
    <Layout>
      <Header>This is the header</Header>
      <Content>
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
      </Content>
    </Layout>
  );
};

export default App;
