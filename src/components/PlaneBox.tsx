/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
import { FC } from 'react';
import { Vector3 } from '@react-three/fiber';
import { useTheme } from 'styled-components';
import { ThemeSchema } from '../theme';

export interface PlaneBoxProps {
  position?: Vector3;
  coordenates: { x: number; y: number };
  // eslint-disable-next-line no-unused-vars
  onRotate: (x: number, y: number) => void;
}

const PlaneBox: FC<PlaneBoxProps> = ({
  position = [0, 0, 0],
  coordenates,
  onRotate,
}) => {
  const theme = useTheme() as ThemeSchema;

  return (
    <mesh
      position={position}
      onClick={() => onRotate(coordenates.x, coordenates.y)}
    >
      <planeGeometry attach="geometry" args={[4.1, 5.1]} />
      <meshPhongMaterial
        attach="material"
        depthWrite={false}
        color={theme.secondary}
        opacity={0.3}
        transparent
      />
    </mesh>
  );
};

export default PlaneBox;
