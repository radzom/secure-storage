module.exports = function (wallaby) {
  return {
    files: [
      'tsconfig.json',
      'src/**/*.ts'
    ],
    tests: [
      'test/**/*.test.ts'
    ],
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({
        module: 'commonjs',
      }),
    },
    env: {
      type: 'node',
    },
    testFramework: 'jest',
    debug: true,
  };
};
