import { FC, ReactNode, useCallback, useEffect, useReducer } from 'react';
import { parseSockectMessage } from '../../utils/socket';
import { useSocket } from '../WebsocketContext/Context';
import { DataContext, initialContext, PipesData } from './Context';

interface DataProviderProps {
  children: ReactNode;
}

export const stateReducer = (
  prevState: PipesData,
  newState: Partial<PipesData>,
): PipesData => ({
  ...prevState,
  ...newState,
});

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialContext);
  const socket = useSocket();

  const onOpen = useCallback(() => {
    console.log('The socket is open!');
    dispatch({ connected: true });
  }, []);

  const onMessage = useCallback((event: MessageEvent) => {
    const action = parseSockectMessage(event.data as string);
    switch (action.key) {
      case 'help':
      case 'new':
      case 'map':
      case 'rotate':
      case 'verify':
        console.log(action);
        break;
      default:
        console.log('Unknown message clasification');
        break;
    }
  }, []);

  const onClose = useCallback(() => {
    alert('The socket is close!');
    dispatch({ connected: false });
  }, []);

  useEffect(() => {
    socket.addEventListener('open', onOpen);

    return () => socket.removeEventListener('open', onOpen);
  }, [socket, onOpen]);

  useEffect(() => {
    socket.addEventListener('message', onMessage);

    return () => socket.removeEventListener('message', onMessage);
  }, [socket, onMessage]);

  useEffect(() => {
    socket.addEventListener('close', onClose);

    return () => socket.removeEventListener('close', onClose);
  }, [socket, onClose]);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export default DataProvider;
