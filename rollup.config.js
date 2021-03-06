import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'ReModulex'
    },
    external: ['react'],
    plugins: [
      resolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      uglify()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'ReModulex'
    },
    external: ['react'],
    plugins: [
      resolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }
]
