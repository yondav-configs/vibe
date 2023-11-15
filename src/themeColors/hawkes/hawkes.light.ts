import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#D1DBF0',
  fg: '#1F212E',
  neutral: {
    900: '#D8D9DF',
    800: '#B5B6C4',
    700: '#8D8FA3',
    600: '#6F7188',
    500: '#595A70',
    400: '#494A5B',
    300: '#3F3F4D',
    200: '#373743',
    100: '#25252C',
  },
  primary: {
    900: '#BED2FF',
    800: '#77A4FF',
    700: '#5D8EFD',
    600: '#3766FA',
    500: '#2145EF',
    400: '#1931DC',
    300: '#1B2AB2',
    200: '#1C298C',
    100: '#161B55',
  },
  secondary: {
    900: '#C5CAFF',
    800: '#9BA0FF',
    700: '#817DFC',
    600: '#6E5EF6',
    500: '#5F41EA',
    400: '#5233CF',
    300: '#432CA7',
    200: '#392B84',
    100: '#23194D',
  },
  accent: {
    900: '#F4BEFF',
    800: '#F3A9FE',
    700: '#EE76FC',
    600: '#E142F3',
    500: '#C822D7',
    400: '#A919B2',
    300: '#A90B41',
    200: '#8B1692',
    100: '#751877',
  },
  highlight: {
    primary: {
      900: '#FEE5F6',
      800: '#FECCED',
      700: '#FF96DA',
      600: '#FE68C6',
      500: '#F83CAD',
      400: '#E81A8C',
      300: '#CA0C6F',
      200: '#A70D5B',
      100: '#8B104E',
    },
    secondary: {
      900: '#FEE5EE',
      800: '#FFCBDF',
      700: '#FFA1C3',
      600: '#FF689A',
      500: '#FA3A74',
      400: '#EA184D',
      300: '#CC0A36',
      200: '#A80C2D',
      100: '#8C0F29',
    },
  },
  ansii: {
    gray: '#6F7188',
    black: {
      default: '#101118',
      bright: '#3F3F4D',
    },
    white: {
      default: '#D8D9DF',
      bright: '#F7F9FC',
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
