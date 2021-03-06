// packages
const Sequelize                   = require('sequelize');

// imports & conts
const UsersModel                  = require('../app/users/model');
const OrdersModel                 = require('../app/orders/model');
const ProductsModel               = require('../app/products/model')
const {config}                    = require('../config');
const {db, user, password, _host} = config;
const host                        = {host: _host,dialect: 'mysql'};
const sequelize                   = new Sequelize(db, user, password, host);
const Users                       = UsersModel(sequelize, Sequelize);
const Orders                      = OrdersModel(sequelize, Sequelize);
const Products                    = ProductsModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() =>{
        console.log("Sincronized tables");
    });

module.exports = {
    Users,
    Orders,
    Products
}












































































