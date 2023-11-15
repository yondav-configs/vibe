import type { Config } from 'jest';

// Define directories to be ignored during testing.
const ignoreDirs = ['dist/', 'node_modules/'];

// Define the Jest configuration options.
const config = async (): Promise<Config> => ({
  preset: 'ts-jest', // Use the 'ts-jest' preset for TypeScript.
  testEnvironment: 'node', // Use Node.js as the test environment.
  bail: 0, // Do not bail on the first test failure (0 means no bail).
  verbose: false, // Disable verbose output.
  silent: true, // Silence all console output (overrides 'verbose' if true).
  roots: ['./src'], // Specify the root directory for tests.
  transform: {
    '^.+\\.[t]sx?$': 'ts-jest', // Transform TypeScript and TypeScript files using 'ts-jest'.
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ignore transformations for specific directories.
  testPathIgnorePatterns: ignoreDirs, // Ignore specific directories when searching for test files.
  coveragePathIgnorePatterns: ignoreDirs, // Exclude specific directories from code coverage analysis.
  coverageDirectory: '<rootDir>/coverage/', // Specify the directory for code coverage reports.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([t]sx?)$', // Regular expression to match test files.
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // List of file extensions for modules.
});

export default config;
