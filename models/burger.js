// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burgers = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  createOne: function(cols, vals, callback) {
    orm.createOne("burgers", cols, vals, function(res) {
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
module.exports = burgers;
