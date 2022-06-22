const Pipe = () => (
  <mesh position={[-4, 0, 0]} onClick={() => console.log('This is a Tube')}>
    <tubeGeometry attach="geometry" />
    <meshBasicMaterial attach="material" color={'white'} />
  </mesh>
);

export default Pipe;
