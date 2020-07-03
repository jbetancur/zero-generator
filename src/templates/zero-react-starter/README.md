# zero-react-starter

Tired of overly bloated and complex React starters/boilerplates? Do you need a starter that requires zero configuration that's not a black box? Here's our opinion for the ultimate React starter:

- react
- react-router
- styled-components
- typescript
- jest
- react-testing-library
- eslint
- prettier
- dark mode theming via styled-components themes
- vscode settings
- zero css/scss files (unless you want that sort of thing)

zero-react-starter is intended for projects that require a little more upfront structure and tooling. For super simple projects something like `create-react-app` is the way to go.

## Prerequisites

This starter works best when you have the following extensions installed:

- ESlint
- Prettier Code Formatter
- stylelint
- EditorConfig for VS Code

## Getting Started

### yarn

```sh
cd <your-project-name>
yarn start
```

### npm

```sh
cd <your-project-name>
npm start
```

## Structure

### src/App.tsx

App contains your routing and and top level providers.

### src/components

Place components in `src/components` that you want to share across your app.

### src/hooks

Place hooks in `src/hooks` that you want to share across your app.

### src/views

Place views that you want to render in `src/views`. After creating a new view components you will need to add its route in `App.tsx`.
