import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#D1F0F0',
  fg: '#1F2B2E',
  neutral: {
    900: '#CBD6D6',
    800: '#A7B9B9',
    700: '#7C9394',
    600: '#617879',
    500: '#536567',
    400: '#475557',
    300: '#3F494B',
    200: '#384041',
    100: '#232929',
  },
  primary: {
    900: '#70FFFC',
    800: '#42FFFF',
    700: '#08D0D3',
    600: '#00A4A8',
    500: '#018C98',
    400: '#08717D',
    300: '#0E5862',
    200: '#104B56',
    100: '#053038',
  },
  secondary: {
    900: '#9BE3FF',
    800: '#79DCFF',
    700: '#32CCFE',
    600: '#07B6F0',
    500: '#0093CD',
    400: '#0075A6',
    300: '#036289',
    200: '#095271',
    100: '#06334B',
  },
  accent: {
    900: '#ECE8FF',
    800: '#DAD5FF',
    700: '#C9BEFF',
    600: '#A088FD',
    500: '#8358FA',
    400: '#7435F2',
    300: '#6523DE',
    200: '#541DBA',
    100: '#461A98',
  },
  highlight: {
    primary: {
      900: '#F6E7FF',
      800: '#EECEFF',
      700: '#DE96FF',
      600: '#D474FE',
      500: '#C040F5',
      400: '#A620D9',
      300: '#8C17B4',
      200: '#751593',
      100: '#631778',
    },
    secondary: {
      900: '#FEE7FF',
      800: '#FDCEFF',
      700: '#FFA7FF',
      600: '#FF68FF',
      500: '#F73EF6',
      400: '#DB1ED7',
      300: '#B615AF',
      200: '#95138E',
      100: '#791671',
    },
  },
  ansii: {
    gray: '#617879',
    black: {
      default: '#121A1B',
      bright: '#384041',
    },
    white: {
      default: '#CBD6D6',
      bright: '#F7FCFC',
    },
    red: {
      default: '#941600',
      bright: '#C71E00',
    },
    yellow: {
      default: '#946500',
      bright: '#C78800',
    },
    green: {
      default: '#009945',
      bright: '#00AD1D',
    },
    blue: {
      default: '#004F94',
      bright: '#006AC7',
    },
    cyan: {
      default: '#006E99',
      bright: '#007575',
    },
    magenta: {
      default: '#650094',
      bright: '#9E009B',
    },
    orange: {
      default: '#995E00',
      bright: '#A83800',
    },
  },
};

export default dark;
