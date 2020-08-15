const CONFIG = require('../config.json');
const Category = require('../models/Category');
const fs = require('fs');
const db = require('../services/database');
const {QueryTypes} = require('sequelize');

exports.getAll = async function (req, res) {
    return res.json({
        code: 'success',
        result: await getCategories()
    });
};

async function getCategories() {
    const query = "SELECT id AS `id`, " +
        "IF (parent_id = 0, '#', parent_id) AS `parent`, " +
        "name as `text` " +
        "FROM category " +
        "ORDER BY `parent`, `number`";

    return await db.query(query, {type: QueryTypes.SELECT})
        .catch(err => console.log(err.message));
}
