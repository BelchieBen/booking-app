
const {Sequelize, Model, DataTypes} = require("sequelize");
const database = require('../database.tsx');

const sequelize = database.sequelize;

class Announcement extends Model {};
Announcement.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    body:{
        type:DataTypes.STRING,
        allowNull:false
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName: 'Announcement',
})

module.exports = Announcement;

