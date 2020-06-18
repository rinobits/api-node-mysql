// packages
const express                                  = require('express');
const router                                   = express.Router();
// imports                                 
const control                                  = require('./responses');
const { orderSchemaCreate, orderSchemaUpdate } = require('./schemas');
const validatorHandler                         = require('../../utils/middlewares/validatorHandler');
const verifyToken                              = require('../../utils/middlewares/verifyToken');

// developer
router.get('/', control.searchOrders());
router.get('/:id', control.searchOrderById());
// admin
router.post('/', verifyToken, validatorHandler(orderSchemaCreate, 'body'), control.createOrder());
router.put('/:id', verifyToken, validatorHandler(orderSchemaUpdate, 'body'), control.updateOrderById());
router.delete('/:id', verifyToken, control.deleteOrderById());

module.exports = router;