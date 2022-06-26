/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
import { FC } from 'react';
import { extend, Vector3 } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import PipesFont from './PipesFont.json';

export interface PipeProps {
  position?: Vector3;
  character?: string;
}

const Pipe: FC<PipeProps> = ({ position = [0, 0, 0], character = '0' }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const font = new FontLoader().parse(PipesFont);
  extend({ TextGeometry });

  return (
    <mesh position={position}>
      {/* @ts-ignore reason: textGeometry isn't included in the three fiber or three package */}
      <textGeometry
        attach="geometry"
        args={[character, { font, size: 3, height: 0 }]}
      />
      <meshBasicMaterial attach="material" color={'white'} />
    </mesh>
  );
};

export default Pipe;
