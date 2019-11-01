const VueLoaderPlugin = require('vue-loader/lib/plugin')
var path = require('path');
module.exports = {
  //...
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,

        loader: 'vue-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  context: path.resolve(__dirname, 'src'),
    entry: './main.js',
 
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9000,
    
  },

};