# Micro Login
A login module for a micro frontend application based on Web Components

## Demo
A demo is available at https://ibbus93.github.io/micro-login

## Goals and motivations
The motivation behind this project is to test a personal approach to microfrontends. 
The goals of the login are to authenticate the user and to return a uuid and an authentication
token to its container. 

## Description
This module is part of the larger personal demo project about React microfrontends 
based on Redux. The project could work standalone but it's intended to be loaded at runtime by its 
<a href="https://www.github.com/Ibbus93/microfrontend-container" target="_blank">container</a>.

Hence, after the project stars, there are two possible behaviours:
  * if **the project is standalone**, then it does nothing notable;
  * if **the project is loaded by the container**, then after the successful login it should return the uuid 
  and the auth token to the container using a callback function received directly by the container.
  
The login request is submitted to a Postman Mock collection, so every username and password combination is acceptable.  

## Project structure
The structure is very light and easy:
  *  `/public` contains the index.html to let the project work as standalone;
  *  `/src` contains the core of the project, in particular:
     *  `/api` contains the POST request of login;
     *  `/features` contains the sign-in page showed to perform the login;
     *  `/store` contains the redux store with the saga effects to make the POST request.

## Technologies
This project is build using [React App Rewired](https://github.com/timarney/react-app-rewired), 
hence it requires a `config-overrides.js` file in order to work.

Other notable technologies used are:
  *  [Material UI](https://github.com/mui-org/material-ui)
  *  [Formik](https://github.com/jaredpalmer/formik)
  *  [Yup](https://github.com/jquense/yup)
  *  [Styled Components](https://github.com/styled-components/styled-components)
  *  [Axios](https://github.com/axios/axios)
  *  [Redux](https://github.com/reduxjs/react-redux)
  *  [Redux Saga](https://github.com/redux-saga/redux-saga)
  *  [Redux Actions](https://github.com/redux-utilities/redux-actions)

## Getting started

1. Clone the repository
2. `yarn install`
3. `yarn start`
