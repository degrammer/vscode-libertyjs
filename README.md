## LibertyJS VS Code Extension

![Demo](demo.png)

We use [yo][https://www.npmjs.com/package/yo] to start a new extension from scracth.

```sh
npx yo .
```

# Start the extension locally

```sh
npm run watch
```

## Pack the extension

```sh
npx vsce package -t darwin-x64
```

The target depends on your OS and Architecture, to see other supported platforms run:

```sh
npx vsce package --help
```