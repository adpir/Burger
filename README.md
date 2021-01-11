<h1 align= "center">:hamburger: Burger :hamburger: <h1>
 


![license](https://img.shields.io/badge/license-MIT-blue.svg)
![Language](https://img.shields.io/badge/Languages-HTML,CSS,Jquery,Nodes-violet.svg)
![Command-line](https://img.shields.io/badge/Command-line-blueviolet.svg)
![Express](https://img.shields.io/badge/Express-turquoise.svg)
![npm](https://img.shields.io/badge/npm-red.svg)
![npm](https://img.shields.io/badge/npm-install-grey.svg)
![node](https://img.shields.io/badge/node-green.svg)
![handlebars](https://img.shields.io/badge/handlebars-yellow.svg)
![JSON](https://img.shields.io/badge/JSON-orange.svg)
![VisualStudioCode](https://img.shields.io/badge/VSC-darkblue.svg)

## :memo: Description:

This burger app uses this programming tools like MySQL, Node, Express, Handlebars, and a homemade ORM (yum!). Remember to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

When connecting remotely to the Heroku database on an open network such as a coffee shop, library, or even the  University WiFi, it will be blocked. 

Get in my Belly! is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

Your app will store every burger in a database, whether devoured or not.

### :camera: Visuals:





### :computer: Installation:


* Create a ```GitHub``` repo called burger and clone it to your computer.
* Make a ```package.json``` file by running ```npm init``` from the command line.
* Install the Express npm package: ```npm install express.```
* Create a ```server.js``` file.
* Install the Handlebars npm package:```npm install express-handlebars.```
* Install MySQL npm package: ```npm install mysql```.


Then require the following npm packages inside of the server.js file:

***express***
***DB Setup***


Inside your burger directory, create a folder named ```db```.

In the db folder, create a file named ```schema.sql```. Write SQL queries this file that do the following:

Create the ```burgers_db```.
Switch to or use the burgers_db.
***Create a burgers table with these fields:***

* id: an auto incrementing int that serves as the primary key.
* burger_name: a string.
* devoured: a boolean.

Still in the db folder, create a ```seeds.sql file```. In this file, write insert queries to populate the burgers table with at least three entries.

Run the ```schema.sql``` and ```seeds.sql``` files into the mysql server from the command line
Now you're going to run these SQL files and make sure you're in the db folder of your app.
Start MySQL command line tool and login: ```mysql -u root -p.```
With the ```mysql> command```line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

Now insert the entries you defined in seeds.sql by running the file: ```source seeds.sql```.

Close out of the MySQL command line tool: ***exit***.

***Config Setup***
Inside your burger directory, create a folder named config.

1. Create a ```connection.js``` file inside config directory.

2. Inside the ```connection.js``` file, setup the code to connect Node to MySQL.

3. Export the connection.

4. Create an ```orm.js``` file inside config directory.

5. Import (require) connection.js into orm.js


In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

* selectAll()
* insertOne()
* updateOne()


***Export the ORM object in module.exports***.

Inside your burger directory, create a folder named ```models```.

1. In models, make a ```burger.js``` file.

2. Inside ```burger.js```, import ```orm.js``` into ```burger.js```

3.  Inside ```burger.js```, create the code that will call the ORM functions using burger specific input for the ORM.

4. Export at the end of the ```burger.js``` file.

***Controller setup***

1. Inside your burger directory, create a folder named ```controllers```.

2. In controllers, create the ```burgers_controller.js``` file.

3. Inside the ```burgers_controller.js``` file, import the following:

* Express
* burger.js

***Create the router for the app, and export the router at the end of your file***.

1. Inside your burger directory, create a folder named ```views```.

2. Create the ```index.handlebars file``` inside views directory.

3. Create the ```layouts directory``` inside views directory.

4. Create the ```main.handlebars``` file inside layouts directory.

5. Setup the main.handlebars file so it's able to be used by Handlebars.


Setup the ```index.handlebars``` to have the template that Handlebars can render onto.

Create a button in ```index.handlebars``` that will submit the user input into the database.


###  Usage:

`node server.js`


### :wave: Contributing:

Pull requests are welcome. For major changes,<br>
please open an issue first to discuss what you would like to change.<br>
Please make sure to update tests as appropriate.


### :octocat: Profile:

[GitHub]
[Heroku]



### :copyright: License

[MIT](https://github.com) All rights reserved.






