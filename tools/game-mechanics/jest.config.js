module.exports = {
  transform: {
    '.ts': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '\\.test\\.ts$',
  moduleFileExtensions: ['js', 'ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  collectCoverageFrom: ['src/*.ts'],
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
};
