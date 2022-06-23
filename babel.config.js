module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ["module-resolver", {
        root: ['src'],
        extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx']
      }],
      ["module:react-native-dotenv",{
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      }]
    ]
};
