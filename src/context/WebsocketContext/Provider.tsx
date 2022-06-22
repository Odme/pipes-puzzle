import { FC, ReactNode } from 'react';
import SocketContext from './Context';

interface SocketProviderProps {
  children: ReactNode;
}

const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  return (
    <SocketContext.Provider value={{ ws: null }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
