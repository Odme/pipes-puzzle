import { FC, ReactNode, useMemo } from 'react';
import { getServices } from '../../api/services';
import { useSocket } from '../WebsocketContext/Context';
import { ServicesContext } from './Context';

interface ServicesProviderProps {
  children: ReactNode;
}

const ServicesProvider: FC<ServicesProviderProps> = ({ children }) => {
  const socket = useSocket();
  const services = useMemo(() => getServices(socket), [socket]);

  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
