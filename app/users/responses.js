// packages
const jwt                       = require('jsonwebtoken');
// imports & consts
const UserServices              = require('./services');
const {config:{authJwtSecret}}  = require('../../config');
const userServices              = new UserServices();

const searchUsers = () => {
    return (req, res, next) => {
        userServices.findUsers()
            .then(responses => {
                let i = 0;
                for(i = 0; i < responses.users.length; i++){
                    delete responses.users[i].dataValues.userPassword;
                }
                res.json({users: responses});
            })
            .catch(e => next(boom.badImplementation(e)));
    }
}
const searchUserById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.findUserById(id)
            .then(response => {
                delete response.user.dataValues.userPassword;
                res.json({user:response})
            })
            .catch(e => next(boom.badImplementation(e)));
    }
}
const createUser = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                res.json({error: 'cant create'});
            }else{
                const {body} = req;
                userServices.createUser(body)
                    .then(response => res.json({id: response}))
                    .catch(e => next(boom.badImplementation(e)));
            }
        });
    }
}
const updateUserById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                res.json({error: 'cant update'});
            }else{
                const {body} = req;
                const {id}   = req.params;
                userServices.updateUserById(id, body) // (!)
                    .then(response => res.json({id: response}))
                    .catch(e => next(boom.badImplementation(e)));
            }
        });
    }
}
const deleteUserById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                res.json({error: 'cant delete'});
            }else{
                const {id} = req.params
                userServices.deleteUserById(id)
                    .then(response => res.json({message : 'user deleted'}))
                    .catch(e => next(boom.badImplementation(e)));
            }
        });
    }
}
module.exports = {
    searchUsers,
    searchUserById,
    createUser,
    updateUserById,
    deleteUserById
};

