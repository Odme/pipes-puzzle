import {
  Bounds,
  Center,
  OrbitControls,
  Stars,
  useContextBridge,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ThemeContext } from 'styled-components';

import { DataContext } from '../../context/DataContext/Context';
import { ServicesContext } from '../../context/ServicesContext/Context';
import { SocketContext } from '../../context/WebsocketContext/Context';
import { PipesTable } from '../PipesTable';

export const ContentCanvas = () => {
  const ContextBridge = useContextBridge(
    SocketContext,
    ServicesContext,
    DataContext,
    ThemeContext,
  );

  return (
    <Canvas flat>
      <ContextBridge>
        <OrbitControls enabled enableRotate={false} />
        <Stars />
        <Bounds fit damping={5} margin={0.8}>
          <Center
            key="bounds-center"
            attach={undefined}
            args={undefined}
            onUpdate={undefined}
            clear={undefined}
            raycast={undefined}
            visible={undefined}
            type={undefined}
            isGroup={undefined}
            id={undefined}
            uuid={undefined}
            name={undefined}
            parent={undefined}
            modelViewMatrix={undefined}
            normalMatrix={undefined}
            matrixWorld={undefined}
            matrixAutoUpdate={undefined}
            matrixWorldNeedsUpdate={undefined}
            castShadow={undefined}
            receiveShadow={undefined}
            frustumCulled={undefined}
            renderOrder={undefined}
            animations={undefined}
            userData={undefined}
            customDepthMaterial={undefined}
            customDistanceMaterial={undefined}
            isObject3D={undefined}
            onBeforeRender={undefined}
            onAfterRender={undefined}
            applyMatrix4={undefined}
            applyQuaternion={undefined}
            setRotationFromAxisAngle={undefined}
            setRotationFromEuler={undefined}
            setRotationFromMatrix={undefined}
            setRotationFromQuaternion={undefined}
            rotateOnAxis={undefined}
            rotateOnWorldAxis={undefined}
            rotateX={undefined}
            rotateY={undefined}
            rotateZ={undefined}
            translateOnAxis={undefined}
            translateX={undefined}
            translateY={undefined}
            translateZ={undefined}
            localToWorld={undefined}
            worldToLocal={undefined}
            lookAt={undefined}
            add={undefined}
            remove={undefined}
            removeFromParent={undefined}
            getObjectById={undefined}
            getObjectByName={undefined}
            getObjectByProperty={undefined}
            getWorldPosition={undefined}
            getWorldQuaternion={undefined}
            getWorldScale={undefined}
            getWorldDirection={undefined}
            traverse={undefined}
            traverseVisible={undefined}
            traverseAncestors={undefined}
            updateMatrix={undefined}
            updateMatrixWorld={undefined}
            updateWorldMatrix={undefined}
            toJSON={undefined}
            clone={undefined}
            copy={undefined}
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
          >
            <PipesTable />
          </Center>
        </Bounds>
      </ContextBridge>
    </Canvas>
  );
};
