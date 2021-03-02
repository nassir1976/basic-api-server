# basic-api-server
### Autor Nassir Abegaz

- <a href=https://basic-api-server1.herokuapp.com// class="icon fa-twitter"><span      class="label">go to heroku app </span></a>

- <a href=https://github.com/nassir1976/basic-api-server.git class="icon fa-twitter"><span class="label">go to gitHub </span></a>

- <a href=https://github.com/nassir1976/basic-api-server/pull/3 class="icon fa-twitter"><span class="label"> pull request </span></a> 


## Requirements
Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

## Data Models
- Create 2 in-memory data models using ES6 Classes, exported as Node Modules
- Define your field names and an empty data storage in the constructor
- The classes should have the following methods defined, to perform CRUD Operations:
create()
- Should ensure that the record created only has the fields that you defined
- get() 
- read()
- update()
- delete()



## Routes
- In your express server, create a route module for each data model that you’ve created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.



### Add a Record
- CRUD Operation: Create
- REST Method: POST
- Path: /food
- path: /clothes

- Input: JSON Object in the Request Body
- Returns: The record that was added to the database.
- must generate an ID and attach it to the object
- hould verify that only the fields you define get saved as a record


- CRUD Operation: Read
- REST Method: GET
- Path: /food
- Returns: An array of objects, each object being one entry from your database

Get One Record

- CRUD Operation: Read
- REST Method: GET
- Path: /food/1
- Returns: The object from the database, which has the id matching that which is in the path
### Update A Record
- CRUD Operation: Update
- REST Method: PUT
- Path: /food/1
- Input: JSON Object in the Request Body
- Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data
- You should verify that only the fields you define get saved as a record

### Delete A Record
- CRUD Operation: Destroy
- REST Method: DELETE
- Path: /food/1
- Returns: The record from the database as it exists after you delete it (i.e. null)

### Documentation
- Compose a UML or Process/Data Flow Diagram for every application

![WhiteBoard](./assets/UML.png)
