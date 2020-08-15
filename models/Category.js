const {DataTypes} = require('sequelize');
const db = require('../services/database');

const modelDefinition = {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
};

let modelOptions = {
    timestamps: false,
    tableName: "category",
};

let CategoryModel = db.define('category', modelDefinition, modelOptions);

module.exports = CategoryModel;
