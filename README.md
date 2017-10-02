# AstrologyDating

#### A dating app which creates matches based on astrological sign, 10.02.17

#### By _ **Jesse Bryan, Lois Choi, Charlie Kelson, Parul Mishra Dubedy, Kaili Nishihira**_

## Description
_A dating app which matches the user with other users based on their astrological sign. The user may also filter user profiles based on astrological sign._

|| Behavior  | Input  | Output  |
|---|---|---|---|
|| | | | |


## Setup/Installation Requirements

* _Install [Node.js](https://nodejs.org/en/download/)_
* _Clone repository_
* _Install Angular CLI `npm install -g @angular/cli@1.0.0`_
* _Install Typescript `npm list -g typescript`_
* _Install Bower `npm install bower -g`_
* _`bower init`_
* _`bower install bootstrap --save`_

## Create a Firebase account
* Create an account with [Firebase](https://firebase.google.com/)
* Create a new project
* Change the Firebase rules in the database to "true"

```
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```
## Install Firebase
* `npm install angularfire2@4.0.0-rc.0 firebase --save`
* Create a new file `src/app/api-keys.ts`
* Paste the following code into the file and replace with your credentials from Firebase:

```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
  ```

#### Install promise-polyfill if you encounter error: Can't resolve 'promise-polyfill'
* `npm install promise-polyfill --save-exact`


## Technologies Used
* _JavaScript_
* _Node.js_
* _[Bootstrap](http://getbootstrap.com/getting-started/)_
* AngularJS 2


### License

Copyright (c) 2017 **_Jesse Bryan, Lois Choi, Charlie Kelson, Parul Mishra Dubedy, Kaili Nishihira_**

*Licensed under the [MIT License](https://opensource.org/licenses/MIT)*


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
