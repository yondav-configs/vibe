import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#291800',
  fg: '#FFEFD8',
  neutral: {
    100: '#F2EBE4',
    200: '#E3D3C5',
    300: '#D0B6A1',
    400: '#BD937A',
    500: '#AF7A60',
    600: '#A26954',
    700: '#875547',
    800: '#6E473E',
    900: '#5A3B34',
  },
  primary: {
    100: '#F7E8DD',
    200: '#EFCEB9',
    300: '#E4AB8D', // second prominent
    400: '#D57750', // most prominent
    500: '#D0633F',
    600: '#C24F34',
    700: '#A13D2D',
    800: '#81322B',
    900: '#692B25',
  },
  secondary: {
    100: '#E9E9DE',
    200: '#D5D4C1', // most prominent
    300: '#BAB99C',
    400: '#A1A17A',
    500: '#87875F',
    600: '#686848',
    700: '#50513A',
    800: '#424331',
    900: '#393A2D',
  },
  accent: {
    100: '#F6EDEE',
    200: '#EEDDDF', // most prominent
    300: '#DFC2C6',
    400: '#CD9FA7',
    500: '#B67884',
    600: '#A05E6E',
    700: '#854B5A',
    800: '#70414F',
    900: '#613A47',
  },
  highlight: {
    primary: {
      100: '#FBF1D9', // most prominent
      200: '#F6E0B2',
      300: '#F0CB85',
      400: '#E8AA4F',
      500: '#E3912C',
      600: '#D47822',
      700: '#B05D1E',
      800: '#8D4B1F',
      900: '#723E1C',
    },
    secondary: {
      100: '#FFEAD4',
      200: '#FFD0A9', // most prominent
      300: '#FFBA85',
      400: '#FE8339',
      500: '#FC6013',
      600: '#ED4609',
      700: '#C53209',
      800: '#9C2810',
      900: '#7E2410',
    },
  },
  ansii: {
    gray: '#A26954',
    black: {
      default: '#0F0900',
      bright: '#5A3B34',
    },
    white: {
      default: '#BD937A',
      bright: '#FFEFD8',
    },
    red: {
      default: '#EC7D85',
      bright: '#CB3741',
    },
    yellow: {
      default: '#E8AA4F',
      bright: '#D47822',
    },
    green: {
      default: '#E4EC9C',
      bright: '#D3D639',
    },
    blue: {
      default: '#99CBF7',
      bright: '#458FEC',
    },
    cyan: {
      default: '#74D4C8',
      bright: '#48B9AE',
    },
    magenta: {
      default: '#CD9FA7',
      bright: '#A05E6E',
    },
    orange: {
      default: '#D57750',
      bright: '#C24F34',
    },
  },
};

export default dark;
