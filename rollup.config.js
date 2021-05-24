import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

import { getFiles } from './scripts/getFiles';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
  input: ['./src/index.ts', ...getFiles('./src/components', extensions)],
  output: {
    dir: 'build',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'build',
    }),
    image({ exclude: ['**/*.svg'] }),
    json(),
    terser(),
    postcss({
      modules: true,
    }),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
    }),
    svgr(),
  ],
  external: ['react', 'react-dom'],
};
