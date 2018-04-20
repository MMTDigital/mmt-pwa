# web-shop

The repository for all web-shop journeys, currently including, but not limited to: basket, broadband, checkout, simo and handset. These pillars of web-shop are all based in React and consume the lib-web-components library for much of their UI. They also share a common Node JS server.

---

## Prerequisites

Before getting started, you'll need to make sure you have the following:

- Node (8+ preferable)
- NPM
- Yarn (optional but preferable - https://yarnpkg.com/lang/en/docs/install/)
- SSH access to Bastion, if you want access to test data (contact dev team for this)
- Docker ([Docker for Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows) - [Docker for Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac))

---

## Getting started

We recommend you use `yarn`. If you wish to use `npm`, you may do so at the discretion of the development team.

Before you install dependencies, you'll need to make sure you have access to install the private npm package of lib-web-components (reusable React components) and lib-dalmatian (Node JS middleware for APIs). Assuming you have access, just login on the command line:

```sh
npm login
```

Then install dependencies:
```sh
yarn install
```

```sh
yarn start
```

The server should be running at http://localhost:8000.


---

## Environment variables

To get the application fully working as expected, you'll need to set a few environment variables. This is mainly so you can connect to the relevant APIs in Vodafone's backend to retrieve test data. The Node JS server reads these at runtime in order to securely access the APIs.

### On Mac

Go to your bash profile or bashrc. It should be located in `~/.bash_profile`. If it doesn't exist, create it, then add this in there:

```sh
PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
export DAL_URL=http://localhost:6180
export DAL_API_KEY=XXX
export HOST_NAME=http://localhost:8000/shop
```

Save the file. If you had the app running in any active terminals, stop it, quit the terminal and reopen a fresh one. Now you should have those environment variables accessible by the app.

Note: Request the DAL_API_KEY value from the dev team, if you wish to have working test data.

### On Windows

- In Search, search for and then select: System (Control Panel)
- Click the Advanced system settings link
- Click Environment Variables
- Add a 'New' variable for each of the following:

DAL_URL=http://localhost:6180
DAL_API_KEY=XXX
HOST_NAME=http://localhost:8000

Click OK and apply those changes. If you had the app running in any active command line, stop it, quit the command line and reopen a fresh one. Now you should have those environment variables accessible by the app.

Note: Request the DAL_API_KEY value from the dev team, if you wish to have working test data.


---

## Redis

web-shop uses Redis as a common layer for caching and basic session state management. If you're on something nice like a Mac, you can just use Redis locally if you find it easier for debugging. However, otherwise, there's a Docker image you can use to run Redis in the background for you (Window or Mac).

### Docker Commands

Rebuild boxes, run as daemon

    docker-compose up --force-recreate -d

Stops running containers without removing them.

    docker-compose stop

Stops containers and removes containers, networks, volumes, and images created by up.

    docker-compose down

Kills containers
    
    docker-compose kill
    
Removes container images
    
    docker-compose rm 
        
List running docker containers

    docker ps
    
SSH onto container

    docker exec -it ##container-id## bin/sh


---

## Components

The generic components folder that resides directly under the src of the web-shop repository is designed to act as a central point for components to be developed in that are specific to web-shop. The components that should be placed in here are those that are shared across multiple journeys within web-shop.

If a component being developed in this folder is only being consumed in one journey, it should go into the components folder for that journey. If it is likely to be required across other channels, such as web-marketing or web-care, then it should be submitted in a pull request for inclusion in the lib-web-components library, which is the NPM package distributed internally across Vodafone front end projects for sharing common React components.


---

## Testing

[Jest](https://facebook.github.io/jest/) is used as the test framework. [Enzyme](https://github.com/airbnb/enzyme) is also an added utility to aid with testing React components. To run the application tests, just run:

```sh
yarn test
```

We group our tests directly with the files they are for. For instance, if we have a helper function `formatText`, we'd create a `formatText` folder and end up with something like this:

- /formatText
  - formatText.js
  - formatText.test.js
  - index.js // export { default } from './formatText'

To generate some coverage reports to review:

```sh
yarn test:cc
```


---

## Codebase Standards

- JavaScript should be written using [StandardJS](https://standardjs.com/). We leave this up to you to add to your editor
- Stylelint is setup and will notify you in the console if you've made a booboo
- [Composition over inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)
- Functional-first thought process, with functional React components over classes
- Reusable logical methods to be placed in helpers, in their own folder grouped with a test
- Prefix methods returning JSX with `render`
- Static fetchData methods from [react-ssr](https://www.npmjs.com/package/react-ssr) for data that needs server-side rendering
- Use [MobX](https://github.com/mobxjs/mobx) everywhere for state management. useStrict is enabled.
- Always use [React CSS Modules](https://github.com/gajus/babel-plugin-react-css-modules) over raw CSS modules
- Use [classnames](https://www.npmjs.com/package/classnames) for subjective classes, with ES6 getters in an ES6 class
- Succinct and concise code is encouraged, but readability and maintenence are more important
- If unsure, _always_ discuss as a team!
