import { useServices } from '../context/ServicesContext/Context';

const Pipe = () => {
  const services = useServices();
  console.log(services);

  return (
    <mesh position={[-4, 0, 0]} onClick={() => services.requestCurrentMap()}>
      <tubeGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color={'white'} />
    </mesh>
  );
};

export default Pipe;
