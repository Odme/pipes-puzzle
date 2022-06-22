import { FC, ReactNode, useReducer } from 'react';
import { stateReducer } from '../../utils/state';
import { useSocket } from '../WebsocketContext/Context';
import { DataContext, PipesData } from './Context';

interface ServicesProviderProps {
  children: ReactNode;
}

const ServicesProvider: FC<ServicesProviderProps> = ({ children }) => {
  const socket = useSocket();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [state, dispatch] = useReducer(stateReducer, {
    connected: false,
    map: null,
    currentLevel: 0,
    hasAction: false,
    hasFinish: false,
  });

  return (
    <DataContext.Provider value={state as PipesData}>
      {children}
    </DataContext.Provider>
  );
};

export default ServicesProvider;
