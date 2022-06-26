import { FC, ReactNode, useCallback, useEffect } from 'react';
import { getSocket } from '../../api/socket';
import { SocketContext } from './Context';

let ws = getSocket((import.meta.env.VITE_WEBSOCKET_URL || '') as string);

interface SocketProviderProps {
  children: ReactNode;
}

const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const onClose = useCallback(() => {
    console.warn('The socket is close!');
    ws = getSocket((import.meta.env.VITE_WEBSOCKET_URL || '') as string);
  }, []);

  useEffect(() => {
    ws.addEventListener('close', onClose);

    return () => ws.removeEventListener('close', onClose);
  }, [onClose]);

  return <SocketContext.Provider value={ws}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
