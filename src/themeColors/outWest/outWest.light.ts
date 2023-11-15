import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#FFEFD8',
  fg: '#291800',
  neutral: {
    900: '#F2EBE4',
    800: '#E3D3C5',
    700: '#D0B6A1',
    600: '#BD937A',
    500: '#AF7A60',
    400: '#A26954',
    300: '#875547',
    200: '#6E473E',
    100: '#5A3B34',
  },
  primary: {
    900: '#F7E8DD',
    800: '#EFCEB9',
    700: '#E4AB8D', // second prominent
    600: '#D57750', // most prominent
    500: '#D0633F',
    400: '#C24F34',
    300: '#A13D2D',
    200: '#81322B',
    100: '#692B25',
  },
  secondary: {
    900: '#E9E9DE',
    800: '#D5D4C1', // most prominent
    700: '#BAB99C',
    600: '#A1A17A',
    500: '#87875F',
    400: '#686848',
    300: '#50513A',
    200: '#424331',
    100: '#393A2D',
  },
  accent: {
    900: '#F6EDEE',
    800: '#EEDDDF', // most prominent
    700: '#DFC2C6',
    600: '#CD9FA7',
    500: '#B67884',
    400: '#A05E6E',
    300: '#854B5A',
    200: '#70414F',
    100: '#613A47',
  },
  highlight: {
    primary: {
      900: '#FBF1D9', // most prominent
      800: '#F6E0B2',
      700: '#F0CB85',
      600: '#E8AA4F',
      500: '#E3912C',
      400: '#D47822',
      300: '#B05D1E',
      200: '#8D4B1F',
      100: '#723E1C',
    },
    secondary: {
      900: '#FFEAD4',
      800: '#FFD0A9', // most prominent
      700: '#FFBA85',
      600: '#FE8339',
      500: '#FC6013',
      400: '#ED4609',
      300: '#C53209',
      200: '#9C2810',
      100: '#7E2410',
    },
  },
  ansii: {
    gray: '#BD937A',
    black: {
      default: '#0F0900',
      bright: '#5A3B34',
    },
    white: {
      default: '#BD937A',
      bright: '#FFEFD8',
    },
    red: {
      default: '#CB3741',
      bright: '#8C262D',
    },
    yellow: {
      default: '#D47822',
      bright: '#8D4B1F',
    },
    green: {
      default: '#A3B72B',
      bright: '#606F1C',
    },
    blue: {
      default: '#275ECE',
      bright: '#26478C',
    },
    cyan: {
      default: '#268B85',
      bright: '#1D5250',
    },
    magenta: {
      default: '#A05E6E',
      bright: '#70414F',
    },
    orange: {
      default: '#C24F34',
      bright: '#81322B',
    },
  },
};

export default dark;
