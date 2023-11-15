import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#2E1F2E',
  fg: '#E7DAE7',
  neutral: {
    100: '#F5F2F5',
    200: '#ECE8EC',
    300: '#DCD5DD',
    400: '#C7BDC8',
    500: '#B1A3B2',
    600: '#9C8B9C',
    700: '#897888',
    800: '#736473',
    900: '#5F535E',
  },
  primary: {
    100: '#FDCEFF',
    200: '#FFA7FF',
    300: '#FF77FF',
    400: '#F73EF6',
    500: '#DB1ED7',
    600: '#B615AF',
    700: '#95138E',
    800: '#791671',
    900: '#51014A',
  },
  secondary: {
    100: '#FEE5F7',
    200: '#FECCF0',
    300: '#FF9BE2',
    400: '#FE68CF',
    500: '#F83CB8',
    600: '#E81A98',
    700: '#CA0C7B',
    800: '#A70D65',
    900: '#8B1056',
  },
  accent: {
    100: '#FFE1E1',
    200: '#FFBEBE',
    300: '#FEA3A3',
    400: '#FB6E6E',
    500: '#F24141',
    600: '#E02222',
    700: '#BC1919',
    800: '#9B1919',
    900: '#811B1B',
  },
  highlight: {
    primary: {
      100: '#FFEDC6',
      200: '#FFDE96',
      300: '#FFC04A',
      400: '#FFA820',
      500: '#F98307',
      600: '#DD5E02',
      700: '#B73F06',
      800: '#942F0C',
      900: '#7A280D',
    },
    secondary: {
      100: '#FEFFC2',
      200: '#FFFF68',
      300: '#FFF745',
      400: '#FCE913',
      500: '#ECD006',
      600: '#CCA302',
      700: '#A27506',
      800: '#865C0D',
      900: '#724B11',
    },
  },
  ansii: {
    gray: '#9C8B9C',
    black: {
      default: '#181018',
      bright: '#5F535E',
    },
    white: {
      default: '#E7DAE7',
      bright: '#FBF9FB',
    },
    red: {
      default: '#FA8680',
      bright: '#FF4242',
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
      default: '#96DAFF',
      bright: '#689AFF',
    },
    cyan: {
      default: '#96FFDE',
      bright: '#68FFFF',
    },
    magenta: {
      default: '#D99BFF',
      bright: '#A477FF',
    },
    orange: {
      default: '#FFD99B',
      bright: '#FFA477',
    },
  },
};

export default dark;
