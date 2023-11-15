import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#1F2B2E',
  fg: '#D1F0F0',
  neutral: {
    100: '#CBD6D6',
    200: '#A7B9B9',
    300: '#7C9394',
    400: '#617879',
    500: '#536567',
    600: '#475557',
    700: '#3F494B',
    800: '#384041',
    900: '#232929',
  },
  primary: {
    100: '#70FFFC',
    200: '#42FFFF',
    300: '#08D0D3',
    400: '#00A4A8',
    500: '#018C98',
    600: '#08717D',
    700: '#0E5862',
    800: '#104B56',
    900: '#053038',
  },
  secondary: {
    100: '#9BE3FF',
    200: '#79DCFF',
    300: '#32CCFE',
    400: '#07B6F0',
    500: '#0093CD',
    600: '#0075A6',
    700: '#036289',
    800: '#095271',
    900: '#06334B',
  },
  accent: {
    100: '#ECE8FF',
    200: '#DAD5FF',
    300: '#C9BEFF',
    400: '#A088FD',
    500: '#8358FA',
    600: '#7435F2',
    700: '#6523DE',
    800: '#541DBA',
    900: '#461A98',
  },
  highlight: {
    primary: {
      100: '#F6E7FF',
      200: '#EECEFF',
      300: '#DE96FF',
      400: '#D474FE',
      500: '#C040F5',
      600: '#A620D9',
      700: '#8C17B4',
      800: '#751593',
      900: '#631778',
    },
    secondary: {
      100: '#FEE7FF',
      200: '#FDCEFF',
      300: '#FFA7FF',
      400: '#FF68FF',
      500: '#F73EF6',
      600: '#DB1ED7',
      700: '#B615AF',
      800: '#95138E',
      900: '#791671',
    },
  },
  ansii: {
    gray: '#475557',
    black: {
      default: '#121A1B',
      bright: '#384041',
    },
    white: {
      default: '#CBD6D6',
      bright: '#F7FCFC',
    },
    red: {
      default: '#FFA696',
      bright: '#FF7961',
    },
    yellow: {
      default: '#FFDE96',
      bright: '#FFFF68',
    },
    green: {
      default: '#9BFFC8',
      bright: '#77FF8E',
    },
    blue: {
      default: '#7AC1FF',
      bright: '#47A9FF',
    },
    cyan: {
      default: '#9BE3FF',
      bright: '#77FFFF',
    },
    magenta: {
      default: '#DE96FF',
      bright: '#FF6BFD',
    },
    orange: {
      default: '#FFD99B',
      bright: '#FFA477',
    },
  },
};

export default dark;
