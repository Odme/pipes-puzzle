import { FC, ReactNode } from 'react';
import { getSocket } from '../../api/socket';
import { SocketContext } from './Context';

const ws = getSocket((import.meta.env.VITE_WEBSOCKET_URL || '') as string);

interface SocketProviderProps {
  children: ReactNode;
}

const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  return <SocketContext.Provider value={ws}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
