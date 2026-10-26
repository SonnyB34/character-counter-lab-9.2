# Character Counter

An interactive character counter application that demonstrates state management and event handling in React. This app will let users input text and see real time statistics about their input, including character count, word count, and reading time.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Reflections 

1. How did you handle state updates when the text changes?

   I used useState on TextInput which keeps the text in its own state so the box shows what you type. Everytime the text changes it call onTextChange to tell CharacterCounter. CharacterCounter calculates the new numbers and saves them in the stats state.


2. What considerations did you make when calculating reading time? 

   I calculated the read time on an average read time of 250 words a minute and used wordCount / 250 .


3. How did you ensure the UI remained responsive during rapid text input?

   I wrappeed the handler in useCallback so it isnt recreated on every render.


4 What challenges did you face when implementing the statistics calculations?

  - The progress bar was a challenge. I compared the word count to minWords or maxWords to pick red green or black status.

  - Leading and trailing spaces was a challenge but I ended up using trim() to remove them before counting.

  -The overall project was a bit challenging I refered to documentation and definitely learned alot.
    