# TabHero

TabHero is a Chrome extension for tab management.

## Setup

- `git clone` this repo
- `npm install` to install dependencies

## Development

### Developing Components

The components can be developed in isolation in storybook: `npm run storybook`

### Developing the App
Once the chrome extension is loaded into the browser, make sure to seed the chrome extension's storage with data. Do this by setting the data from the `fixtures` directory into the extension's `chrome.storage.local` using a tool like [Storage Area Explorer](https://chrome.google.com/webstore/detail/storage-area-explorer/ocfjjjjhkpapocigimmppepjgfdecjkb?hl=en).

The `public` folder is where the svelte-built chrome extension lives. The html files there should reference the svelte js bundles. Hot-reloading isn't set up. So to develop, run `npm run build` to build the app, and reload the extension.

The app would not work in development through `npm run dev`, because this will start the Svelte dev server, which serves the app in a web context, where the Chrome APIs are not available.
