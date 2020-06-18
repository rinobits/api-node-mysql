// packages
const express               = require('express');
const router                = express.Router();
// imports & consts
const control               = require('./responses');
const validatorHandler      = require('../../utils/middlewares/validatorHandler');
const verifyToken           = require('../../utils/middlewares/verifyToken');
const { deleteProductById } = require('./responses');
const { productSchemaCreate, productSchemaUpdate } = require('./schemas');

// developer
router.get('/', control.searchProducts());
router.get('/:id', control.searchProductById());
// admin
router.post('/', verifyToken, validatorHandler(productSchemaCreate, 'body'), control.createProduct());
router.put('/:id', verifyToken, validatorHandler(productSchemaUpdate, 'body'),control.updateProductById());
router.delete('/:id', verifyToken, deleteProductById());
module.exports = router;
