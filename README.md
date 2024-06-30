# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


1. Create project: 
  - Step 1: yarn create project
  - Step 2: yarn add -D vite

2. Config elsint: 
  "no-console": 1,
    "no-trailing-spaces": 1,
    "no-multi-spaces": 1,
    "no-multiple-empty-lines": 1,
    "space-before-blocks": ["error", "always"],
    "object-curly-spacing": [1, "always"],
    "indent": ["warn", 2],
    "semi": [1, "always"],
    "quotes": ["error", "double"],
    "array-bracket-spacing": 1,
    "linebreak-style": 0,
    "keyword-spacing": 1,
    "comma-dangle": 1,
    "comma-spacing": 1,
    "arrow-spacing": 1,

3. Install mui and config css base line, delete index.css, main.css...

4. config import: enter the file vite.config.ts and add codes:
resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }

  enter the file tsconfig.app.json and add code:
  "paths": {
      "~/*": ["./src/*"]
    },

5. Install redux, reudxtoolkit

6. Install and config react-router-dom, the library help for Page transition:
create folder routes

7. Config theme for project
step 1: go to github of example project mui then clone file theme.tsx
step 2: import it into main.tsx
