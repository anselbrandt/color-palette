# Current version 4.0.0 of Create React App crashes

## To use this patched version:

```
npx degit github.com/anselbrandt/react-ts react-ts

cd react-ts

yarn

yarn start
```

## Fixes

This repo applies the following patches as per [Issue #10110](https://github.com/facebook/create-react-app/issues/10110#issuecomment-731521800):

Upgrade the following dependencies in `package.json`:

```
from:

"react-scripts": "4.0.0",
"typescript": "^4.0.3",

 to:

"react-scripts": "4.0.0-next.98",
"typescript": "^4.1.2",
```

Modify `tsconfig.json`:

```
from:

"jsx": "react-jsx"

to:

"jsx": "react"
```
