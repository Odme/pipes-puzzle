import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import PipesFont from '../fonts/PipesFont.json';

export const pipesFont = new FontLoader().parse(PipesFont);
