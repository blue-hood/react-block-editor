module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb'
  ],
  rules: {
    '@typescript-eslint/indent': "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ]
  }
};