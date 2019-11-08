module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  roots: ['<rootDir>/app'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/build/']
};