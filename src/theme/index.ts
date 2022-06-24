export interface ThemeSchema {
  text: string;
  primary: string;
  secondary: string;
  error: string;
  success: string;
  transparent: string;
}

export interface ThemeComponentSchema {
  theme: ThemeSchema;
}

export const theme = {
  text: '#ffeedd',
  primary: '#353535',
  secondary: '#6ca6c1',
  error: '#ba3f1d',
  success: '#a1c181',
  transparent: 'transparent',
};
