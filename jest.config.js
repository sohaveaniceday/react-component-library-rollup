const { defaults } = require('jest-config');

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '.*': 'babel-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css)$': 'identity-obj-proxy',
  },
};
