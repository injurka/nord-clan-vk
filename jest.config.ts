import type { InitialOptionsTsJest } from 'ts-jest/dist/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
/** @type {import('@jest/types').Config.InitialOptions} */
//
const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/out/'
  ],
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  }
};

export default createJestConfig(config);
