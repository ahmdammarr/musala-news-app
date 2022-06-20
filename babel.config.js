module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ["module-resolver", {
        root: ['src'],
        extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx']
      }]
    ]
};
