import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#0a0a0a',
  fg: '#fafafa',
  neutral: {
    100: '#f4f4f5',
    200: '#e5e5e5',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },
  primary: {
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd', // second prominent
    400: '#60a5fa', // most prominent
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  secondary: {
    100: '#ccfbf1',
    200: '#99f6e4', // most prominent
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  accent: {
    100: '#fce7f3',
    200: '#fecdd3', // most prominent
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
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
    gray: '#78716c',
    black: {
      default: '#000000',
      bright: '#404040',
    },
    white: {
      default: '#a3a3a3',
      bright: '#ffffff',
    },
    red: {
      default: '#f87171',
      bright: '#ef4444',
    },
    yellow: {
      default: '#fef08a',
      bright: '#F79F09',
    },
    green: {
      default: '#86efac',
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
      default: '#f0abfc',
      bright: '#d946ef',
    },
    orange: {
      default: '#fdba74',
      bright: '#f97316',
    },
  },
};

export default dark;
