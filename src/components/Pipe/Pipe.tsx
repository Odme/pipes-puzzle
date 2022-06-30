/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from 'react';
import { extend, Vector3 } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

import { pipesFont } from '../../utils/font';

export interface PipeProps {
  position?: Vector3;
  character?: string;
}

const Pipe: FC<PipeProps> = ({ position = [0, 0, 0], character = '0' }) => {
  extend({ TextGeometry });

  return (
    <mesh position={position}>
      {/* @ts-ignore reason: textGeometry isn't included in the three fiber or three package */}
      <textGeometry
        attach="geometry"
        args={[character, { font: pipesFont, size: 3, height: 0 }]}
      />
      <meshBasicMaterial attach="material" color={'white'} />
    </mesh>
  );
};

export default Pipe;
