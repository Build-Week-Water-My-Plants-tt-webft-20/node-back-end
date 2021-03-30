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
    "password" - string, REQUIRED </br>
    "role" - string, MUST be "owner" or "renter", REQUIRED </br>

    **SERVER PUTS IN THE FIELDS BELOW AUTOMATICALLY**
    "created_at" - timestamp, no need on client-end </br>
    "updated_at" - timestamp, no need on client-end </br>

## [Login]

- Token required for login
- Example: https://water-my-plants-back-end.herokuapp.com/api/auth/login

  - **[POST] [Login]** - Login an already registered user to receive a token </br>

    - Endpoint: **/auth/login**

    **Fields:** </br>
    "username" - string, MUST match a registered username, REQUIRED </br>
    "password" - string, MUST match a registered password with registered username, REQUIRED </br>

## [Users]

- Token required for seeing users

  - **[GET] [FindAllUsers]** - Finds all users </br>

    - Endpoint: **/users**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/users

  - **[GET] [FindUserById]** - Find a registered user by assigned user ID </br>
    - Endpoint: **/users/:id**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/users/1
