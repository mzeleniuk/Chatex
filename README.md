# Chatex

A full stack real-time mobile chat application with Meteor and Ionic 2.

## How to run a project

#### 1. Install [Ionic](https://ionicframework.com/ "Ionic's Homepage") and [Cordova](https://cordova.apache.org/ "Cordova's Homepage")

`$ npm install -g ionic cordova`

#### 2. Install [Meteor](https://www.meteor.com/ "Meteor's Homepage")

`$ curl https://install.meteor.com/ | sh`

#### 3. Install [Meteor Client Bundler](https://github.com/Urigo/meteor-client-bundler "GitHub page")

`$ npm install -g meteor-client-bundler`

#### 4. Install Meteor's "Sharp" package

`$ meteor npm install sharp`

#### 5. Install NPM packages

`$ npm install`

#### 6. Bundle all the necessary Meteor client script files

`$ npm run meteor-client:bundle`

#### 7. Run Meteor server in development mode

`api$ meteor run --settings private/settings.json`

#### 8. Start Ionic application

`$ ionic serve`
