import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#211C1C',
  fg: '#FFF0F2',
  neutral: {
    100: '#F3EDED',
    200: '#EADEDE',
    300: '#DBC6C6',
    400: '#C4A5A5',
    500: '#AD8686',
    600: '#966C6C',
    700: '#7D5858',
    800: '#694B4B',
    900: '#594343',
  },
  primary: {
    100: '#D7CE7F',
    200: '#C5BC56',
    300: '#AAA338', // second prominent
    400: '#878329', // most prominent
    500: '#676524',
    600: '#535221',
    700: '#43431E',
    800: '#3D3D15',
    900: '#26260D',
  },
  secondary: {
    100: '#F6D791',
    200: '#F1BC58', // most prominent
    300: '#EEA83B',
    400: '#E6831A',
    500: '#CB6214',
    600: '#A94314',
    700: '#8A3516',
    800: '#712D16',
    900: '#411507',
  },
  accent: {
    100: '#F9EBEA',
    200: '#F2D9D9', // most prominent
    300: '#E8B9B9',
    400: '#DA9293',
    500: '#C96A6E',
    600: '#A84750',
    700: '#953B46',
    800: '#7E333F',
    900: '#6C2F3A',
  },
  highlight: {
    primary: {
      100: '#91FEED', // most prominent
      200: '#52F6E2',
      300: '#1FE2D2',
      400: '#06C6B8',
      500: '#029F97',
      600: '#067F7A',
      700: '#0A6563',
      800: '#0E5351',
      900: '#003333',
    },
    secondary: {
      100: '#F2E096',
      200: '#EAC85A', // most prominent
      300: '#E2B12D',
      400: '#D29A20',
      500: '#B57819',
      600: '#915617',
      700: '#78451B',
      800: '#673A1C',
      900: '#3C1D0C',
    },
  },
  ansii: {
    gray: '#7D5858',
    black: {
      default: '#0E0002',
      bright: '#594343',
    },
    white: {
      default: '#DBC6C6',
      bright: '#FFF0F2',
    },
    red: {
      default: '#CE685A',
      bright: '#EE4F3A',
    },
    yellow: {
      default: '#EEA83B',
      bright: '#FFA300',
    },
    green: {
      default: '#8FC66C',
      bright: '#7ECA4E',
    },
    blue: {
      default: '#5BACF1',
      bright: '#1D95FC',
    },
    cyan: {
      default: '#48EAE5',
      bright: '#18DCD7',
    },
    magenta: {
      default: '#CD89A4',
      bright: '#E56693',
    },
    orange: {
      default: '#EB7F00',
      bright: '#E84500',
    },
  },
};

export default dark;
