/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const forms = require('@tailwindcss/forms')
const nebulaDesignPlugin = require('./public/tailwindPlugin')

const plugins = [
  forms,
  nebulaDesignPlugin,
]

module.exports = {
  content: [
    './src/**/*.vue',
    './demo/index.html',
    './demo/**/*.vue',
  ],
  plugins,
}