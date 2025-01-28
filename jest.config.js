module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  collectCoverageFrom: [
    'src/main/**/*.js',
    '!src/main/app.js',
    '!src/main/api/**/*Router.js',
    '!src/main/api/common/responseMapper.js',
    '!src/main/domain/models/**',
    '!src/main/domain/repositories/entities/**',
    '!src/main/infraestructure/**',
    '!src/main/settings/**',
    '!src/test/**',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  setupFiles: ['./jest.setup.js'],
};
