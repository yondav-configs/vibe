import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#DEDAE7',
  fg: '#241F2E',
  neutral: {
    900: '#DEDFE7',
    800: '#C9CAD8',
    700: '#B3B2C7',
    600: '#A19EB6',
    500: '#8C88A3',
    400: '#746F88',
    300: '#645F74',
    200: '#53505F',
    100: '#302F37',
  },
  primary: {
    900: '#DFD4FF',
    800: '#C8B2FF',
    700: '#A477FF',
    600: '#9555FD',
    500: '#8932F5',
    400: '#7A20E1',
    300: '#671ABD',
    200: '#55189A',
    100: '#340C69',
  },
  secondary: {
    900: '#EBCEFF',
    800: '#D99BFF',
    700: '#CB74FE',
    600: '#B440F5',
    500: '#9A20D9',
    400: '#8217B4',
    300: '#6D1593',
    200: '#5D1778',
    100: '#390151',
  },
  accent: {
    900: '#FFBEDF',
    800: '#FFA1CF',
    700: '#FF66AE',
    600: '#FB398D',
    500: '#EB1768',
    400: '#CD094E',
    300: '#A90B41',
    200: '#8D0E39',
    100: '#57001E',
  },
  highlight: {
    primary: {
      900: '#FFC9C8',
      800: '#FF9896',
      700: '#FD6F6C',
      600: '#F5413E',
      500: '#E22420',
      400: '#BE1A17',
      300: '#9D1A17',
      200: '#821C1A',
      100: '#470908',
    },
    secondary: {
      900: '#FFC8A9',
      800: '#FF9A68',
      700: '#FE6F39',
      600: '#FC4813',
      500: '#ED2E09',
      400: '#C51E09',
      300: '#9C1A10',
      200: '#7E1810',
      100: '#440906',
    },
  },
  ansii: {
    gray: '#A19EB6',
    black: {
      default: '#131018',
      bright: '#53505F',
    },
    white: {
      default: '#DEDAE7',
      bright: '#F7F6F9',
    },
    red: {
      default: '#940200',
      bright: '#C70300',
    },
    yellow: {
      default: '#946500',
      bright: '#C78800',
    },
    green: {
      default: '#00663F',
      bright: '#007527',
    },
    blue: {
      default: '#003399',
      bright: '#0044CC',
    },
    cyan: {
      default: '#005F85',
      bright: '#008585',
    },
    magenta: {
      default: '#BD0086',
      bright: '#C700C7',
    },
    orange: {
      default: '#B26E00',
      bright: '#B23C00',
    },
  },
};

export default dark;
