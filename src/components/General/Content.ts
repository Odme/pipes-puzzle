import styled from 'styled-components';
import { ThemeComponentSchema } from '../../theme';

export const Content = styled.div`
  position: relative;
  grid-area: content;
  background-color: ${({ theme }: ThemeComponentSchema) => theme.transparent};
  height: 100%;
  z-index: 0;
`;
