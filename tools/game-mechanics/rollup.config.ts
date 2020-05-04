import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'GameMechanics',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript(),
    ],
  },

  {
    input: 'src/index.ts',
    plugins: [typescript()],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
  },
];
