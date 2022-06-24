import { createContext, useContext } from 'react';

export interface PipesData {
  connected: boolean;
  map: Array<Array<string>> | null;
  currentLevel: number;
  hasStarted: boolean;
  hasAction: boolean;
  hasFinish: boolean;
  error: string | null;
}

export const initialContext: PipesData = {
  connected: false,
  map: null,
  currentLevel: 1,
  hasStarted: false,
  hasAction: false,
  hasFinish: false,
  error: null,
};

export const DataContext = createContext<PipesData>(initialContext);
export const useData = () => useContext(DataContext);
