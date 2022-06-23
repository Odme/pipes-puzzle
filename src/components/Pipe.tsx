const Pipe = () => {
  return (
    <mesh position={[-4, 0, 0]} onClick={() => null}>
      <tubeGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color={'white'} />
    </mesh>
  );
};

export default Pipe;
