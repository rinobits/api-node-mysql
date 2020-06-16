// packages
const jwt                       = require('jsonwebtoken');
// imports & consts
const {config:{authJwtSecret}}  = require('../../config');
const auth                      = require('./services');

const login = (req, res) => {
    auth(req.body.userName, req.body.userPassword)
        .then(r => res.json({response : r}))
        .catch(e => next(boom.badImplementation(e)));
}

module.exports = {
    login
}