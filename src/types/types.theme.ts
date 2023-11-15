// Represents color types.
export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

// Represents an acceptable color value.
export type Color = RGB | RGBA | HEX;

// Represents the shading scale of a given color value.
export type Shades = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

// Represents the shading scale of a given color with assigned values.
export type ColorShades = { [key in Shades]: Color };

// Represents ansii color names.
export type AnsiiValues =
  | 'black'
  | 'white'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'orange';

// Represents ansii color object.
export type AnsiiColor = {
  default: Color;
  bright: Color;
};

// Represents whole collection of ansii colors.
export type AnsiiColors = {
  [key in AnsiiValues]: AnsiiColor;
} & { gray: Color };

// Represents theme color variant names.
export type ColorVariants = 'neutral' | 'primary' | 'secondary' | 'accent' | 'highlight';

// Represents theme color objects.
export type ThemeColors = {
  [key in Exclude<ColorVariants, 'highlight'>]: ColorShades;
} & {
  highlight: {
    [key in Exclude<ColorVariants, 'neutral' | 'accent' | 'highlight'>]: ColorShades;
  };
};

export interface ThemeConfig extends ThemeColors {
  bg: Color;
  fg: Color;
  ansii: AnsiiColors;
}

export enum Themes {
  LEGACY_DARK = 'Vibe Dark Legacy',
  HAWKES_DARK = 'Vibe Hawkes Dark',
  HAWKES_LIGHT = 'Vibe Hawkes Light',
  ICEBERG_DARK = 'Vibe Iceberg Dark',
  ICEBERG_LIGHT = 'Vibe Iceberg Light',
  MISCHKA_DARK = 'Vibe Mischka Dark',
  MISCHKA_LIGHT = 'Vibe Mischka Light',
  MOODY_BLUE_DARK = 'Vibe Moody Blue Dark',
  MOODY_BLUE_LIGHT = 'Vibe Moody Blue Light',
  NEUTRAL_DARK = 'Vibe Neutral Dark',
  NEUTRAL_LIGHT = 'Vibe Neutral Light',
  OUT_WEST_DARK = 'Vibe Out West Dark',
  OUT_WEST_LIGHT = 'Vibe Out West Light',
  PRIM_DARK = 'Vibe Prim Dark',
  PRIM_LIGHT = 'Vibe Prim Light',
  SOFT_DARK = 'Vibe Soft Dark',
  SOFT_LIGHT = 'Vibe Soft Light',
}

type ThemeType = 'dark' | 'light';

type SemanticTokenColor = { foreground: Color };

type TokenColor = {
  name: string;
  scope: string | Array<string>;
  settings: {
    foreground: Color;
  } & Partial<{ [key: string]: string }>;
};

export interface Theme {
  $schema: 'vscode://schemas/color-theme';
  name: Themes;
  type: ThemeType;
  colors: Record<string, Color>;
  semanticHighlighting: true;
  semanticTokenColors: Record<string, SemanticTokenColor>;
  tokenColors: Array<TokenColor>;
}
