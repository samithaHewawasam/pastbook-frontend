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
$ cd pastbook
$ npm install
$ npm start
```

For production environments...

```sh
$ npm run build
```

### Docker
Pastbook is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd pastbook-frontend
docker build --name pastbook-frontend -t .
```
This will create the Pastbook-frontend image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Pastbook-frontend.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 3000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:3000 --restart="always" pastbook-frontend:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```