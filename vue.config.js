const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg/,
          use: ['file-loader']
        }
      ]
    },
  }
};
