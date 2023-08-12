const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  // Make sure this path is correct
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'production',
};

