const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = new Sequelize('booking-app','postgres','Testing321?',{
    host: 'localhost',
    dialect: 'postgres'
  });

function connect(){
    try{
        sequelize.authenticate();
        console.log("Authenticated with database");
      }
      catch(err) {
        console.log("Unable to connect to databse " + {err});
      }
}

module.exports = {connect, sequelize};