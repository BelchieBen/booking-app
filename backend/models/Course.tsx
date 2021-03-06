const {Sequelize, Model, DataTypes} = require("sequelize");
const database = require('../database.tsx');
const LearningObjective = require('./LearningObjective.tsx');

const sequelize = database.sequelize;
class Course extends Model {
    static associate(models){
        Course.hasMany(models.LearningObjective);
    }
};
Course.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    courseTitle:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    courseDescription:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    courseAudience:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    courseLength:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    courseSpaces:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    courseThumbnail:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    selfDirectedLearning:{
        type:DataTypes.STRING,
        allowNull:false,
    }

}, {
    sequelize,
    modelName: 'Course',
});

Course.hasMany(LearningObjective);

module.exports = Course;