import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs',
            format: 'cjs', // CommonJS output
            exports: 'named',
        },
        {
            file: 'dist/index.esm.js',
            format: 'es', // ES module output
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        json()
    ],
    external: [], // List peer dependencies, e.g., ['react']
};
