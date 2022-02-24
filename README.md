# About this project
This is a little excercise to show how to get realtime updates from a database in an angular application.

[![Build Status](https://travis-ci.org/ivpadim/top5houston.svg?branch=master)](https://travis-ci.org/ivpadim/top5houston/builds)

Deployed application: https://top5houston.firebaseapp.com/

# Requirements

We want to show the user a live map of locations that are fetched from a data store. Upon accessing the page the user 
should see a map around the given locations and it should get updates live if the data is modified elsewhere. 
Each location at a given latitude and longitude should show the name of the location and a status indicating whether 
it’s open or not.

The frontend is not required to have editing capabilities, but any changes on the backend datastore should be reflected 
without refreshing.

The choice of technology stack is open and up to you, this includes frontend, backend, data store and any other operational 
tools you may use.

# Solution

Having the option to choose any technology we'll use firebase for the backend since it already has realtime updates 
built-in and is a easy to use tool.

For the frontend we'll stick with the standard: Angular 5 and given that we are using angular we are going to use angular-cli 
(angular command line interface) and agm (angular google maps) for the map.

We are also going to adopt continuous integration using [travis ci](https://travis-ci.org).

So to recap:

- Database: [Firebase](https://firebase.google.com)
- WebServer: Node & Express
- FrontEnd: Angular with [AGM](https://angular-maps.com/guides/getting-started/) (Angular Google Maps)
- Tools: Visual Studio Code, Angular CLI and Travis CI
  

# Installation

Run the following commands:

>  ~ git clone https://github.com/ivpadim/top5houston.git  
>  ~ cd top5houston  
>  ~ npm install  

You can run the applications by executing

> ~ npm start

You can also start the updater which randomly changes a location status

> ~ node firebase.worker.js

# Configuration

1) For firebase check the next tutorial: https://coursetro.com/posts/code/31/How-to-Make-an-Angular-Firebase-Chat-App
2) Once you create your project you can import the seed data located in /src/data/locations.json
3) Update the firebase config located in /src/environments/environment.ts and /firebase.worker.js
4) Get a new [AGM key](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key) and update /src/environments/environment.ts

***OLD REPO***