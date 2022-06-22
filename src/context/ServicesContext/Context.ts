import { createContext, useContext } from 'react';
import { Services } from '../../api/services';

export const ServicesContext = createContext<Services | null>(null);
export const useServices = () => useContext(ServicesContext) as Services;
