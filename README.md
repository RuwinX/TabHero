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

## Behaviour

- The app popup exists within the context of a single chrome tab. On switching chrome tabs, the popup should backup the state into the chrome storage and then a new app popup should be instantiated, loading data associated with the new tab from the storage.

## Anomalies

1. [ ] When app is opened while a page is loading, two syncs occur: 1) App's mount syncs data from storage, 2) Page's "on load complete" syncs data from storage. If any action is performed between the two syncs (like adding a new tag to the page), the resultant state is overridden by the second sync.

## Suggestions

1. [ ] Visual element showing whether the app is synced with local storage or synced with the backend, like how google docs does it.
2. [ ] In AddTag bar, even when a tag has been added, it shows up in the search results. Either we don't show them (but then we'd have to give user feedback somehow) or we let the user either 1) see a non-clickable "already added" prompt or 2) see a "remove tag" prompt, making the entire component a Add/Remove Tag component
