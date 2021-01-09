// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  updateOne: function(objColVals, condition, callback ) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  },
  deleteOne: function(condition, callback) {
    orm.deleteOne("burgers", condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
