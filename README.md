# SCAFE REST APIs.

## Getting started.
* Clone/Download the repository on your local machine.
* Run `npm install` to download all the dependencies for the project.
* Start the mongo daemon service in the location where mongodb is installed on your machine, by issuing `mongod`.
* OR run the `mongod_start.bat` avalable in the project, provided mongodb is installed in the default location.
* Run `node seedDB.js` to populate the database.
* Run `node app.js` to start the RESTful server.
- - -

## API Documentation. ##

### Food APIs ###

URL endpoint  | Response      | Request Type | Request Body
------------- | ------------- | ------------|-----------
/food  | List of food items  | GET|None
/food  | Creates a new food item  |POST| Eg: `{name:"name", cost:10, customerRatings:[]}`
/food/{id}|Updates a food|PUT| Pass object with name OR/AND cost