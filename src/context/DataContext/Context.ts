import { createContext, useContext } from 'react';

export interface PipesData {
  connected: boolean;
  map: Array<Array<string>> | null;
  currentLevel: number;
  hasAction: boolean;
  hasFinish: boolean;
}

export const DataContext = createContext<PipesData | null>(null);
export const useData = () => useContext(DataContext) as PipesData;
