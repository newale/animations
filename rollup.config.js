import livereload from 'rollup-plugin-livereload';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-porter';
import analyze from 'rollup-plugin-analyzer';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    !production && livereload(),
    sourcemaps(),
    htmlTemplate({
      template: 'src/template.html',
      target: 'index.html',
    }),
    // tells Rollup how to find p5 in node_modules
    resolve(),
    // converts p5 to ES modules
    commonjs(),
    css({
      raw: false
    }),
    production && terser(), // minify, but only in production
    production && analyze() // analyze, but only in production
  ]
};