import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#111027',
  fg: '#EFF3FE',
  neutral: {
    100: '#E9E9F5',
    200: '#D0D2E7',
    300: '#A7ACD2',
    400: '#797FB7',
    500: '#565EA1',
    600: '#454A84',
    700: '#404164',
    800: '#31335B',
    900: '#2C2D4E',
  },
  primary: {
    100: '#DEE1FF',
    200: '#C4C7FF',
    300: '#A0A3FF', // second prominent
    400: '#766EFF', // most prominent
    500: '#6F5BF9',
    600: '#613DEE',
    700: '#542FD3',
    800: '#4429AA',
    900: '#3A2986',
  },
  secondary: {
    100: '#d8ffe8',
    200: '#97ffc1', // most prominent
    300: '#78fdaf',
    400: '#36f285',
    500: '#0cdb63',
    600: '#03b64f',
    700: '#078e40',
    800: '#0b7036',
    900: '#0c5b2f',
  },
  accent: {
    100: '#fee5f3',
    200: '#ffb8e0', // most prominent
    300: '#ffa1d5',
    400: '#ff66b6',
    500: '#fb3998',
    600: '#eb1774',
    700: '#cd0959',
    800: '#a90b4a',
    900: '#8d0e40',
  },
  highlight: {
    primary: {
      100: '#b9fefe', // most prominent
      200: '#a4fbfd',
      300: '#66f6fa',
      400: '#21e6ef',
      500: '#05c9d5',
      600: '#07a1b3',
      700: '#0d7f91',
      800: '#146676',
      900: '#155564',
    },
    secondary: {
      100: '#fff3c6',
      200: '#fee376', // most prominent
      300: '#fed44b',
      400: '#fdc022',
      500: '#f79f09',
      600: '#db7704',
      700: '#b65307',
      800: '#93400d',
      900: '#79350e',
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
      default: '#FF857D',
      bright: '#FF5347',
    },
    yellow: {
      default: '#FEE376',
      bright: '#F79F09',
    },
    green: {
      default: '#97FFC1',
      bright: '#0CDB63',
    },
    blue: {
      default: '#67BEF4',
      bright: '#21A0EF',
    },
    cyan: {
      default: '#b9fefe',
      bright: '#21e6ef',
    },
    magenta: {
      default: '#ffb8e0',
      bright: '#ff66b6',
    },
    orange: {
      default: '#FFB88F',
      bright: '#F35900',
    },
  },
};

export default dark;
