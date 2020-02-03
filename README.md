# Micro Login
A login module for a micro frontend application based on Web Components

## Demo
A demo is available at https://ibbus93.github.io/micro-login

## Description
The goal of this project is to test a micro frontend approach based on web components.
The idea is to create a container in React with a Redux Store. This module will be loaded if the user is not logged in and 
it will update the upper store when the log in will be successfully performed.

## Project structure
The **src** directory contains:  
*  the **features** of the application, in this case represented only by the Sign In;
*  an **API** module, represented by a Postman mock API that will return `OK 200` to every login request performed;
*  a **Redux Store**, used to perform a Saga effect to make the login request.
