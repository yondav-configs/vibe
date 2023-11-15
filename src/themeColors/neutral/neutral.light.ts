import type { ThemeConfig } from '../../types';

const dark: ThemeConfig = {
  bg: '#fafafa',
  fg: '#0a0a0a',
  neutral: {
    900: '#f4f4f5',
    800: '#e5e5e5',
    700: '#d4d4d8',
    600: '#a1a1aa',
    500: '#71717a',
    400: '#52525b',
    300: '#3f3f46',
    200: '#27272a',
    100: '#18181b',
  },
  primary: {
    900: '#dbeafe',
    800: '#bfdbfe',
    700: '#93c5fd', // second prominent
    600: '#60a5fa', // most prominent
    500: '#3b82f6',
    400: '#2563eb',
    300: '#1d4ed8',
    200: '#1e40af',
    100: '#1e3a8a',
  },
  secondary: {
    900: '#ccfbf1',
    800: '#99f6e4', // most prominent
    700: '#5eead4',
    600: '#2dd4bf',
    500: '#14b8a6',
    400: '#0d9488',
    300: '#0f766e',
    200: '#115e59',
    100: '#134e4a',
  },
  accent: {
    900: '#fce7f3',
    800: '#fecdd3', // most prominent
    700: '#fda4af',
    600: '#fb7185',
    500: '#f43f5e',
    400: '#e11d48',
    300: '#be123c',
    200: '#9f1239',
    100: '#881337',
  },
  highlight: {
    primary: {
      900: '#b9fefe', // most prominent
      800: '#a4fbfd',
      700: '#66f6fa',
      600: '#21e6ef',
      500: '#05c9d5',
      400: '#07a1b3',
      300: '#0d7f91',
      200: '#146676',
      100: '#155564',
    },
    secondary: {
      900: '#fff3c6',
      800: '#fee376', // most prominent
      700: '#fed44b',
      600: '#fdc022',
      500: '#f79f09',
      400: '#db7704',
      300: '#b65307',
      200: '#93400d',
      100: '#79350e',
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
      default: '#dc2626',
      bright: '#b91c1c',
    },
    yellow: {
      default: '#d97706',
      bright: '#b45309',
    },
    green: {
      default: '#16a34a',
      bright: '#15803d',
    },
    blue: {
      default: '#2563eb',
      bright: '#1d4ed8',
    },
    cyan: {
      default: '#0891b2',
      bright: '#0e7490',
    },
    magenta: {
      default: '#db2777',
      bright: '#be185d',
    },
    orange: {
      default: '#ea580c',
      bright: '#c2410c',
    },
  },
};

export default dark;
