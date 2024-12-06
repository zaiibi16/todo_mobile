module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '~assets': './src/assets',
          '~components': './src/components',
          '~hooks': './src/hooks',
          '~navigation': './src/navigation',
          '~screens': './src/screens',
          '~services': './src/services',
          '~theme': './src/theme',
          '~utils': './src/utils',
          '~zustand': './src/zustand',
        },
      },
    ],
    ['@babel/plugin-transform-private-methods', { loose: true }]
  ],
};
