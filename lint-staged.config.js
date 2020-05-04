module.exports = [
  {
    'apps/run-generator/**/*.{ts, vue}': [
      'vue-cli-service lint',
      'prettier --write',
    ],
  },
  {
    'tools/game-mechanics/**/*.ts': [
      'eslint src --ext .ts --cache --fix',
      'prettier --write',
    ],
  },
];
