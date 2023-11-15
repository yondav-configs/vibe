import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#241F2E',
  fg: '#DEDAE7',
  neutral: {
    100: '#DEDFE7',
    200: '#C9CAD8',
    300: '#B3B2C7',
    400: '#A19EB6',
    500: '#8C88A3',
    600: '#746F88',
    700: '#645F74',
    800: '#53505F',
    900: '#302F37',
  },
  primary: {
    100: '#DFD4FF',
    200: '#C8B2FF',
    300: '#A477FF',
    400: '#9555FD',
    500: '#8932F5',
    600: '#7A20E1',
    700: '#671ABD',
    800: '#55189A',
    900: '#340C69',
  },
  secondary: {
    100: '#EBCEFF',
    200: '#D99BFF',
    300: '#CB74FE',
    400: '#B440F5',
    500: '#9A20D9',
    600: '#8217B4',
    700: '#6D1593',
    800: '#5D1778',
    900: '#390151',
  },
  accent: {
    100: '#FFBEDF',
    200: '#FFA1CF',
    300: '#FF66AE',
    400: '#FB398D',
    500: '#EB1768',
    600: '#CD094E',
    700: '#A90B41',
    800: '#8D0E39',
    900: '#57001E',
  },
  highlight: {
    primary: {
      100: '#FFC9C8',
      200: '#FF9896',
      300: '#FD6F6C',
      400: '#F5413E',
      500: '#E22420',
      600: '#BE1A17',
      700: '#9D1A17',
      800: '#821C1A',
      900: '#470908',
    },
    secondary: {
      100: '#FFC8A9',
      200: '#FF9A68',
      300: '#FE6F39',
      400: '#FC4813',
      500: '#ED2E09',
      600: '#C51E09',
      700: '#9C1A10',
      800: '#7E1810',
      900: '#440906',
    },
  },
  ansii: {
    gray: '#746F88',
    black: {
      default: '#131018',
      bright: '#53505F',
    },
    white: {
      default: '#DEDAE7',
      bright: '#F7F6F9',
    },
    red: {
      default: '#FF9896',
      bright: '#FF6461',
    },
    yellow: {
      default: '#FFDE96',
      bright: '#FFFF68',
    },
    green: {
      default: '#9BFFD9',
      bright: '#77FFA4',
    },
    blue: {
      default: '#80AAFF',
      bright: '#4D88FF',
    },
    cyan: {
      default: '#9BE3FF',
      bright: '#77FFFF',
    },
    magenta: {
      default: '#FF9BE2',
      bright: '#FF77FF',
    },
    orange: {
      default: '#FFD99B',
      bright: '#FFA477',
    },
  },
};

export default dark;
