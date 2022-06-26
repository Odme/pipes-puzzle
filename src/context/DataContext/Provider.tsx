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
    dispatch({ ...initialContext, connected: true });
  }, []);

  const onMessage = useCallback(
    (event: MessageEvent) => {
      const { key, payload } = parseSockectMessage(event.data as string);
      switch (key) {
        case 'help': {
          return console.log({ payload });
        }
        case 'new': {
          return dispatch({ hasFinish: false, hasStarted: true });
        }
        case 'map': {
          // console.log(payload);
          const mapRows = payload.split(/\r?\n/);
          const mapMatrix = mapRows.map((row) => [...row]);
          // console.table(mapMatrix);
          return dispatch({ map: mapMatrix });
        }
        case 'rotate': {
          dispatch({ hasAction: true });
          return console.log({ key, payload });
        }
        case 'verify': {
          if (!payload.startsWith('Incorrect')) {
            return dispatch({
              map: null,
              hasFinish: true,
              currentLevel: state.currentLevel + 1,
            });
          }
          return dispatch({
            hasAction: false,
          });
        }
        default:
          console.log('Unknown message clasification');
          break;
      }
    },
    [state.currentLevel],
  );

  const onClose = useCallback(() => {
    alert('The socket is close!');
    dispatch({ ...initialContext });
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
