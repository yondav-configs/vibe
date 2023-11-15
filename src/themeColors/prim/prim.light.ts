import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#E7DAE7',
  fg: '#2E1F2E',
  neutral: {
    900: '#DED4DE',
    800: '#D5CDD5',
    700: '#C4B9C6',
    600: '#AFA0B0',
    500: '#9A889B',
    400: '#847184',
    300: '#6D5F6C',
    200: '#574C57',
    100: '#443B43',
  },
  primary: {
    900: '#FDCEFF',
    800: '#FFA7FF',
    700: '#FF77FF',
    600: '#F73EF6',
    500: '#DB1ED7',
    400: '#B615AF',
    300: '#95138E',
    200: '#791671',
    100: '#51014A',
  },
  secondary: {
    900: '#FEE5F7',
    800: '#FECCF0',
    700: '#FF9BE2',
    600: '#FE68CF',
    500: '#F83CB8',
    400: '#E81A98',
    300: '#CA0C7B',
    200: '#A70D65',
    100: '#8B1056',
  },
  accent: {
    900: '#FFE1E1',
    800: '#FFBEBE',
    700: '#FEA3A3',
    600: '#FB6E6E',
    500: '#F24141',
    400: '#E02222',
    300: '#BC1919',
    200: '#9B1919',
    100: '#811B1B',
  },
  highlight: {
    primary: {
      900: '#FFEDC6',
      800: '#FFDE96',
      700: '#FFC04A',
      600: '#FFA820',
      500: '#F98307',
      400: '#DD5E02',
      300: '#B73F06',
      200: '#942F0C',
      100: '#7A280D',
    },
    secondary: {
      900: '#FEFFC2',
      800: '#FFFF68',
      700: '#FFF745',
      600: '#FCE913',
      500: '#ECD006',
      400: '#CCA302',
      300: '#A27506',
      200: '#865C0D',
      100: '#724B11',
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
      default: '#AD1810',
      bright: '#C20A00',
    },
    yellow: {
      default: '#A17412',
      bright: '#D39712',
    },
    green: {
      default: '#03633E',
      bright: '#00A868',
    },
    blue: {
      default: '#006094',
      bright: '#0095E5',
    },
    cyan: {
      default: '#008A75',
      bright: '#00A3A3',
    },
    magenta: {
      default: '#9D00FF',
      bright: '#5F0FFF',
    },
    orange: {
      default: '#CC7E00',
      bright: '#A83800',
    },
  },
};

export default dark;
