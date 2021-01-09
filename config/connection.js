//Set up mysql
const mysql = require ('mysql');

const connection = mysql.createConnection({
host:"localhost",
port:3306,
user:"root",
password:"bori!cu@_PR33",
databse:"burgers_db"

});
//Make a connection
connection.connect(function(err) {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
console.log("connected as id" + connection.threadId);
});
//export to ORM
module.exports = connection;