// packages
const boom                      = require('@hapi/boom');

// imports & consts
const auth                      = require('./services');


const login = (req, res, next) => {
    auth(req.body.userName, req.body.userPassword)
        .then(r => res.json({response : r}))
        .catch(e => {
            e = boom.unauthorized(e);
            
            res.json(e.output.payload);
        })
}

module.exports = {
    login
}