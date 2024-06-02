/**
 * Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
 * Transform syntax
 * Polyfill 
 * Source code transformations (codemods)
 * 
 * Plugins are individual transformations or features that Babel can apply to your code. eg - arrow, template literal
 * "plugins": [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-template-literals"
  ]
 * 
  Presets are collections of plugins that work together to transform your code for a particular environment.
They provide a simpler way to apply multiple plugins by grouping them into a single configuration
 * Commonly used presets include @babel/preset-env, which includes plugins to transform ES6+ code to ES5, and @babel/preset-react for transforming React JSX code.
 */
module.exports = {
  presets: ['@babel/preset-env'],
};
