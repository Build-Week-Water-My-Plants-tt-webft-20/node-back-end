<h1 align="center">Welcome to Water-My-Plants 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-14.16.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-6.14.11-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Ensuring that all your plants are consistently watered is actually pretty difficult. Water My Plants is an app that helps to solve those problems. Ensuring that all your plants are consistently watered is actually pretty difficult. Water My Plants is an app that helps to solve those problems.

### ✨ [Demo](https://vigorous-ptolemy-caed18.netlify.app/)

## Prerequisites

- node 14.16.0
- npm 6.14.11

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Stone Cogswell**

* Website: https://portfolio-website-6di4xzboh.vercel.app/
* Github: [@CogsCode98](https://github.com/CogsCode98)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

# Node Back-End - Build Week - Water My Plants tt_wbft_20 - Stone Cogswell

**[Endpoints]** Base URL: https://water-my-plants-back-end.herokuapp.com/api

- This url will be the beginning of all endpoints. Add the following endpoints below to the base URL.

## [Register]

- No token is required when registering
- Example: https://water-my-plants-back-end.herokuapp.com/api/auth/register

  - **[POST] [Register]** - Register a new user </br>

    - Endpoint: **/auth/register**

    **Fields:** </br>
    "user_username" - string, unique (MUST not match any other registered username), REQUIRED </br>
    "user_password" - string, REQUIRED </br>
    "user_phone_number" - number, REQUIRED </br>

## [Login]

- Token required for login
- Example: https://water-my-plants-back-end.herokuapp.com/api/auth/login

  - **[POST] [Login]** - Login an already registered user to receive a token </br>

    - Endpoint: **/auth/login**

    **Fields:** </br>
    "user_username" - string, MUST match a registered username, REQUIRED </br>
    "user_password" - string, MUST match a registered password with registered username, REQUIRED </br>

## [Users]

- Token required for seeing users

  - **[GET] [FindAllUsers]** - Finds all users </br>

    - Endpoint: **/users**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/users

  - **[GET] [FindUserById]** - Find a registered user by assigned user ID </br>
    - Endpoint: **/users/:user_id**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/users/1

## [Plants]

- Token required for seeing plants

  - **[GET] [FindAllPlants]** - Finds all plants </br>

    - Endpoint: **/plants**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/plants

  - **[GET] [FindPlantById]** - Find a specific plant by its assigned plant ID </br>

    - Endpoint: **/plants/:plant_id**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/plants/1

  - **[GET] [FindPlantsByUserId]** - Find a user's plants by their assigned user ID </br>

    - Endpoint: **/plants/user/:user_id**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/plants/user/1

  - **[POST] [AddPlants]** - Create a new user plant. </br>

    - Endpoint: **/plants**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/plants

  - **[PUT] [AddPlants]** - Update an existing user's plant. </br>

    - Endpoint: **/plants/:plant_id**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/plants/1

  - **[DELETE] [RemovePlantById]** - Remove a user's plant by their assigned plant ID </br>

    - Endpoint: **/plant/:plant_id**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/plants/1
