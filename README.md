# Find a Trip

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run the app locally

1. Install the dependencies with:

```sh
yarn
```

2. Set up authentication keys

The authentication API requires a client ID and secret that should be added in the environment file _.env.local_ in the root folder (the _.local_ at the end is important to avoid pushing the values to a public repository, [see more here](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env)):

```sh
# .env.local
REACT_APP_CLIENT_ID="client-id"
REACT_APP_CLIENT_SECRET="client-secret"
```

3. Start the development server

```sh
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build:clean`

Alias for `yarn clean && yarn run build`.

### `yarn clean`

Delete the generated folders to put the repository in a clean state.
For now, the folders are _build_ and _coverage_.

### `yarn format`

Format the files using [Prettier](https://prettier.io/).
For now the targeted files are:

- JavaScript
- JSON
- Markdown
- HTML

### `yarn lint`

Alias for `yarn lint:format && yarn lint:js`.

### `yarn lint:format`

Ensure the files are correctly formatted using [Prettier](https://prettier.io/).

### `yarn lint:js`

Run [ESLint](https://eslint.org/) on the source code.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
