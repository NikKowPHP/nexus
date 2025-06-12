module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    '^next/font/google$': '<rootDir>/__mocks__/next-font-google.ts',
    '^next/router$': '<rootDir>/__mocks__/next-router.ts',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json',
      jsx: 'react-jsx'
    }],
  },
  setupFilesAfterEnv: [
    '<rootDir>/.env.test',
    '<rootDir>/jest.setup.ts'
  ],
  testMatch: ['**/?(*.)+(spec|test).(ts|tsx)'],
};