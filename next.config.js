// next.config.js
const withTM = require("next-transpile-modules")([
  "unist-util-visit",
  "hast-util-has-property",
  "hast-util-to-string",
  "unist-util-is",
]); // pass the modules you would like to see transpiled

module.exports = withTM();
