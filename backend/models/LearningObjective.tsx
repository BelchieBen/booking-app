const {Sequelize, Model, DataTypes} = require("sequelize");
const database = require('../database.tsx');
const Course = require('./Course.tsx');

const sequelize = database.sequelize;

class LearningObjective extends Model {
    static associate(models){
        LearningObjective.belongsTo(models.Course, {
            foreignKey: 'courseId'
        });
    }
};
LearningObjective.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    objective:{
        type:DataTypes.STRING,
        allowNull:false,
    }

}, {
    sequelize,
    modelName: 'LearningObjective',
});

//LearningObjective.belongsTo(Course);

module.exports = LearningObjective;