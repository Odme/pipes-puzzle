import styled from 'styled-components';
import { ThemeComponentSchema } from '../../theme';

export const Header = styled.div`
  grid-area: header;
  height: 3rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }: ThemeComponentSchema) => theme.primary};
  box-shadow: 0px 1px 5px 0px ${({ theme }: ThemeComponentSchema) => theme.text};
  z-index: 1;
`;
