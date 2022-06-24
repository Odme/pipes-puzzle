import styled from 'styled-components';
import { ThemeComponentSchema } from '../../theme';

export const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr;
  grid-template-areas: 'header' 'content';
  gap: 0.25rem;
  background-color: ${({ theme }: ThemeComponentSchema) => theme.primary};
`;
