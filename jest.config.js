module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: ['^.+\\.js$'],
  testPathIgnorePatterns: ['<rootDir>/dist'],
}
