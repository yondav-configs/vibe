import type { ThemeConfig } from '../../types';

const light: ThemeConfig = {
  bg: '#D8D7EF',
  fg: '#111027',
  neutral: {
    100: '#212230',
    200: '#27273A',
    300: '#30314B',
    400: '#3E4060',
    500: '#52567A',
    600: '#6C709E',
    700: '#9599BB',
    800: '#BBBDD3',
    900: '#CFCFDE',
  },
  primary: {
    100: '#3A2986',
    200: '#4429AA',
    300: '#542FD3',
    400: '#613DEE',
    500: '#6F5BF9',
    600: '#766EFF', // most prominent
    700: '#A0A3FF', // second prominent
    800: '#C4C7FF',
    900: '#DEE1FF',
  },
  secondary: {
    100: '#078E40',
    200: '#03B64F', // most prominent
    300: '#0CDB63',
    400: '#36F285',
    500: '#78FDAF',
    600: '#97FFC1',
    700: '#D8FFE8',
    800: '#E5FFF0',
    900: '#F5FFF9',
  },
  accent: {
    100: '#8D0E40',
    200: '#A90B4A', // most prominent
    300: '#CD0959',
    400: '#EB1774',
    500: '#FB3998',
    600: '#FF66B6',
    700: '#FFA1D5',
    800: '#FFB8E0',
    900: '#FEE5F3',
  },
  highlight: {
    primary: {
      100: '#0D7F91', // most prominent
      200: '#07A1B3',
      300: '#05C9D5',
      400: '#21E6EF',
      500: '#66F6FA',
      600: '#A4FBFD',
      700: '#B9FEFE',
      800: '#CDFEFE',
      900: '#E0FFFF',
    },
    secondary: {
      100: '#93400D',
      200: '#B65307', // most prominent
      300: '#DB7704',
      400: '#F79F09',
      500: '#FDC022',
      600: '#FED44B',
      700: '#FEE376',
      800: '#FFF3C6',
      900: '#FFF9E5',
    },
  },
  ansii: {
    gray: '#888891',
    black: {
      default: '#00000a',
      bright: '#56565d',
    },
    white: {
      default: '#a2a2a9',
      bright: '#f0f0ff',
    },
    red: {
      default: '#990A00',
      bright: '#C10E00',
    },
    yellow: {
      default: '#995200',
      bright: '#C27A00',
    },
    green: {
      default: '#055C29',
      bright: '#008A3A',
    },
    blue: {
      default: '#0B359D',
      bright: '#0041E5',
    },
    cyan: {
      default: '#08525E',
      bright: '#008B94',
    },
    magenta: {
      default: '#730732',
      bright: '#A30055',
    },
    orange: {
      default: '#77340E',
      bright: '#A74106',
    },
  },
};

export default light;
