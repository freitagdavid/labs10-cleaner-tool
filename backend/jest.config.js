module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '__tests__/helpers/'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/helpers/setupEnv.ts'],
};
