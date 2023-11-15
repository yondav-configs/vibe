import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#FFF0F2',
  fg: '#0E0002',
  neutral: {
    900: '#F3EDED',
    800: '#EADEDE',
    700: '#DBC6C6',
    600: '#C4A5A5',
    500: '#AD8686',
    400: '#966C6C',
    300: '#7D5858',
    200: '#694B4B',
    100: '#594343',
  },
  primary: {
    900: '#F3F2D4',
    800: '#E8E9AD',
    700: '#D6D97D', // second prominent
    600: '#C1C655', // most prominent
    500: '#A4AB37',
    400: '#818828',
    300: '#6C7326',
    200: '#4F5420',
    100: '#43481F',
  },
  secondary: {
    900: '#F6D791',
    800: '#F1BC58', // most prominent
    700: '#EEA83B',
    600: '#E6831A',
    500: '#CB6214',
    400: '#A94314',
    300: '#8A3516',
    200: '#712D16',
    100: '#411507',
  },
  accent: {
    900: '#F9EBEA',
    800: '#F2D9D9', // most prominent
    700: '#E8B9B9',
    600: '#DA9293',
    500: '#C96A6E',
    400: '#A84750',
    300: '#953B46',
    200: '#7E333F',
    100: '#6C2F3A',
  },
  highlight: {
    primary: {
      900: '#91FEED', // most prominent
      800: '#52F6E2',
      700: '#1FE2D2',
      600: '#06C6B8',
      500: '#029F97',
      400: '#067F7A',
      300: '#0A6563',
      200: '#0E5351',
      100: '#003333',
    },
    secondary: {
      900: '#F2E096',
      800: '#EAC85A', // most prominent
      700: '#E2B12D',
      600: '#D29A20',
      500: '#B57819',
      400: '#915617',
      300: '#78451B',
      200: '#673A1C',
      100: '#3C1D0C',
    },
  },
  ansii: {
    gray: '#C4A5A5',
    black: {
      default: '#0E0002',
      bright: '#594343',
    },
    white: {
      default: '#DBC6C6',
      bright: '#FFF0F2',
    },
    red: {
      default: '#961D0D',
      bright: '#C42009',
    },
    yellow: {
      default: '#B28600',
      bright: '#D69300',
    },
    green: {
      default: '#798314',
      bright: '#9A956B',
    },
    blue: {
      default: '#00315B',
      bright: '#1F66A3',
    },
    cyan: {
      default: '#00625F',
      bright: '#00837A',
    },
    magenta: {
      default: '#61292E',
      bright: '#A84750',
    },
    orange: {
      default: '#D96333',
      bright: '#EB7F00',
    },
  },
};

export default dark;
