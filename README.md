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
    - Endpoint: **/users/:plant_id**
    - Example: https://water-my-plants-back-end.herokuapp.com/api/plants/1
