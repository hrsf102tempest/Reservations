module.exports = {
  'verbose': true,
  'setupFiles': ['<rootDir>/test/jestSetup.js'],
  'transform': {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  'moduleNameMapper': {
    "\\.css$": "identity-obj-proxy"
  }
};
