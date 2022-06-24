import { ThemeSchema } from '../../theme/index';
import styled from 'styled-components';
import { ThemeComponentSchema } from '../../theme';

interface ButtonProps {
  color?: keyof ThemeSchema;
  backgroundColor?: keyof ThemeSchema;
}

export const Button = styled.button<ThemeComponentSchema & ButtonProps>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 0.25rem;
  margin: 0;

  &:hover {
    cursor: pointer;
    filter: contrast(120%);
  }

  &:disabled {
    cursor: default;
    filter: contrast(30%);
  }

  /* Color the border and text with theme.main */
  color: ${({ color, theme }: ThemeComponentSchema & ButtonProps) =>
    theme[color || 'text']};
  background-color: ${({
    backgroundColor,
    theme,
  }: ThemeComponentSchema & ButtonProps) =>
    theme[backgroundColor || 'transparent']};
  border: 2px solid
    ${({ color, theme }: ThemeComponentSchema & ButtonProps) =>
      theme[color || 'text']};
`;
