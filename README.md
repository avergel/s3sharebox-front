# S3ShareBox
This repository contains the frontend part of **S3ShareBox**, a cloud storage webapp using S3 for storing files and Cognito for manage user accounts. The backend server repository is located at https://github.com/avergel/js-fullstack-course

## Features
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Users can login and access to their own storage space
- Users can browse through folders and files
- Users can upload and download files
- *Work In Progress: Files can be moved, renamed and deleted*
- *WIP Users can signup, change passwords and use the `forgot password` functionality*

## Technologies and dependencies used
- React 16.11
- Redux 7.1
- Redux Thunk 2.3
- Axios

## Configuration
In `/src/utils/config.js` change `backendServerUrl` const pointing to the backend server url.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## License
Copyright (c) 2019 Alberto Vergel licensed under the MIT license.