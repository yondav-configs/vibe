import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#1F212E',
  fg: '#D1DBF0',
  neutral: {
    100: '#D8D9DF',
    200: '#B5B6C4',
    300: '#8D8FA3',
    400: '#6F7188',
    500: '#595A70',
    600: '#494A5B',
    700: '#3F3F4D',
    800: '#373743',
    900: '#25252C',
  },
  primary: {
    100: '#BED2FF',
    200: '#77A4FF',
    300: '#5D8EFD',
    400: '#3766FA',
    500: '#2145EF',
    600: '#1931DC',
    700: '#1B2AB2',
    800: '#1C298C',
    900: '#161B55',
  },
  secondary: {
    100: '#C5CAFF',
    200: '#9BA0FF',
    300: '#817DFC',
    400: '#6E5EF6',
    500: '#5F41EA',
    600: '#5233CF',
    700: '#432CA7',
    800: '#392B84',
    900: '#23194D',
  },
  accent: {
    100: '#F4BEFF',
    200: '#F3A9FE',
    300: '#EE76FC',
    400: '#E142F3',
    500: '#C822D7',
    600: '#A919B2',
    700: '#A90B41',
    800: '#8B1692',
    900: '#751877',
  },
  highlight: {
    primary: {
      100: '#FEE5F6',
      200: '#FECCED',
      300: '#FF96DA',
      400: '#FE68C6',
      500: '#F83CAD',
      600: '#E81A8C',
      700: '#CA0C6F',
      800: '#A70D5B',
      900: '#8B104E',
    },
    secondary: {
      100: '#FEE5EE',
      200: '#FFCBDF',
      300: '#FFA1C3',
      400: '#FF689A',
      500: '#FA3A74',
      600: '#EA184D',
      700: '#CC0A36',
      800: '#A80C2D',
      900: '#8C0F29',
    },
  },
  ansii: {
    gray: '#494A5B',
    black: {
      default: '#101118',
      bright: '#3F3F4D',
    },
    white: {
      default: '#D8D9DF',
      bright: '#F7F9FC',
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
