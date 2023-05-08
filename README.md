# Screen Scout

Welcome to Screen Scout, a React app that allows you to search for movies and TV shows using the Open Movie Database (OMDb) API.

## Getting Started

To get started with Screen Scout, clone this repository to your local machine and install the dependencies:

shCopy code

`git clone https://github.com/JuanSebastianGB/ScreenScout.git
cd ScreenScout
pnpm install`

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

### `pnpm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Features

- Search for movies and TV shows using keywords
- Sort the results by title
- Debounced search to prevent API requests from firing too frequently
- Basic input validation
- Error messages when a search query is invalid or the API call fails

## Usage

Type a keyword into the search box and click the "Search" button to see a list of results. You can sort the results by clicking the "Sort by title" checkbox. If the search query is invalid, an error message will appear below the search box.

## Contributing

Contributions are always welcome! If you find a bug or have a feature request, please [open an issue](https://github.com/JuanSebastianGB/ScreenScout/issues/new). If you'd like to contribute code, please fork the repository and submit a pull request.
