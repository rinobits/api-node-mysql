// packages
const express                                          = require('express');
const router                                           = express.Router();
// imports & cons                                  
const control                                          = require('./responses');
const { userSchemaCreate, userSchemaUpdate, idSchema } = require("./schemas");
const validatorHandler                                 = require('../../utils/middlewares/validatorHandler');
const verifyToken                                      = require('../../utils/middlewares/verifyToken');
// developer
router.get('/', control.searchUsers());
router.get('/:id', control.searchUserById());
// admin
router.post('/', verifyToken, validatorHandler(userSchemaCreate , 'body'), control.createUser());
router.put('/:id', verifyToken, validatorHandler(userSchemaUpdate, 'body'), control.updateUserById());
router.delete('/:id',  verifyToken, control.deleteUserById());
module.exports = router;
