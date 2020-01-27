# PastBook Grid
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Assessment: 
1. Fetch the uploaded photos 
2. Show the uploaded photos to the user, so that they can make the selection and define the order 
3. Generate a photo grid from the selected photos 
4. Create a NodeJS API to save the selection 
5. On page reload, take the users directly to the photo grid 

There are two applications
- Pastbook frontend 
- Pastbook backend

### Tech

Dillinger uses a number of open source projects to work properly:

* [ reactjs.org ] - A JavaScript library for building user interfaces.
* [ loopback.io ] - A highly extensible Node.js and TypeScript framework.
* [ mongodb.com ] - The most popular database for modern apps.
* [react-bootstrap.github.io ] - The most popular front-end framework. 
* [https://jsdoc.app] - Documentation generator for JavaScript,
* [docker.com] - Documentation generator for JavaScript,

### Installation

Pastbook prefer [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

#### Pastbook Frontend
```sh
$ cd pastbook-frontend
$ npm install
$ npm start
```

Plese use a port other than `3000` for frontend
Ports config in `src/httpClient.js`

#### Pastbook backend
```sh
$ cd pastbook-backend
$ npm install
$ npm start
```

Plese use a port `3000` backend

Ports config for mongodb in `src/datasources/mongo.datasource.config.json`

### Pastbook db

mongodb is used for database

```sh
$ docker run -d -p 27017:27017  mongo
```

### To generate JsDoc

```sh
$ jsdoc src -r -R README.md -d docs
```