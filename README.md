This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Create-React-App to bootstrap the application

I used CRA to bootstrap the application as it has a lot of common things out of the box and saves a lot of time to scafforld a react app.

npx create-react-app rockpapersiccors
cd rockpapersiccors
yarn add react-router-dom node-sass
yarn install
yarn start

## Available Scripts

In the project directory, you can run:

### `yarn start` to run the project at PORT=3003

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

I used @testing/library to wrtie unit tests for the application

### `yarn build`

### Containerize/Dockerize the App

After scaffolding the rockpaperscissor app, I decided to dockerize it for development purpose

Create Docker Files
touch Dockerfile .dockerignore

Build the image
\$docker build -t <name_of_user>/rockpaperscissor .

Run image and add ENV variables to container
\$docker run -it -p 3003:3003 <name_of_image>

Verify that its running on poer 3003
http://localhost:3003

