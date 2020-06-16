// packages
const boom                      = require('@hapi/boom');
// imports & consts
const auth                      = require('./services');

const login = (req, res) => {
    auth(req.body.userName, req.body.userPassword)
        .then(r => res.json({response : r}))
        .catch(e => next(boom.badImplementation(e)));
}

module.exports = {
    login
}