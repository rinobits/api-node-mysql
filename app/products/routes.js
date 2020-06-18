// packages
const express               = require('express');
const router                = express.Router();
// imports & consts
const control               = require('./responses');
const validatorHandler      = require('../../utils/middlewares/validatorHandler');
const verifyToken           = require('../../utils/middlewares/verifyToken');
const { deleteProductById } = require('./responses');
const { productSchemaCreate, productSchemaUpdate, idSchema } = require('./schemas');

// developer
router.get('/', control.searchProducts());
router.get('/:id', validatorHandler(idSchema, 'params'), control.searchProductById());
// admin
router.post('/', verifyToken, validatorHandler(productSchemaCreate, 'body'), control.createProduct());
router.put('/:id', validatorHandler(idSchema, 'params'), verifyToken, validatorHandler(productSchemaUpdate, 'body'),control.updateProductById());
router.delete('/:id', validatorHandler(idSchema, 'params'), verifyToken, deleteProductById());
module.exports = router;
