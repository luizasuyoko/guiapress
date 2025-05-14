const Sequelizer = require("sequelize");
const connection = require("../database/database");

const category = connection.define('categories', {
    title:{
        type: Sequelizer.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelizer.STRING,
        allowNull: false
    }
})




module.exports = category;