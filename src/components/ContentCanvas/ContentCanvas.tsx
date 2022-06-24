import {
  Bounds,
  OrbitControls,
  Stars,
  useContextBridge,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Pipe from '../Pipe';
import { DataContext } from '../../context/DataContext/Context';
import { ServicesContext } from '../../context/ServicesContext/Context';
import { SocketContext } from '../../context/WebsocketContext/Context';

export const ContentCanvas = () => {
  const ContextBridge = useContextBridge(
    SocketContext,
    ServicesContext,
    DataContext,
  );

  return (
    <Canvas>
      <ContextBridge>
        <OrbitControls enabled={false} />
        <Stars />
        <Bounds fit clip damping={5} margin={5}>
          <Pipe />
        </Bounds>
      </ContextBridge>
    </Canvas>
  );
};
