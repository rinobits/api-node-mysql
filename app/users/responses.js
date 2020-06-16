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
                for(i = 0; i < responses._users.length; i++){
                    delete responses._users[i].dataValues.userPassword;
                }
                res.json(responses);
            })
            .catch(err => next(err));
    }
}
const searchUserById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.findUserById(id)
            .then(response => {
                delete response.user.dataValues.userPassword;
                res.json(response)
            })
            .catch(err => next(err));
    }
}

const createUser = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                res.sendStatus(403);
            }else{
                const {body} = req;
                userServices.createUser(body)
                    .then(response => res.json({id: response}))
                    .catch(err => next(err));
            }
        });
    }
}
const updateUserById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                res.sendStatus(403);
            }else{
                const {body} = req;
                const {id}   = req.params;
                userServices.updateUserById(id, body) // (!)
                    .then(response => res.json({id: response}))
                    .catch(err => next(err))
            }
        });
    }
}
const deleteUserById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                res.sendStatus(403);
            }else{
                const {id} = req.params
                userServices.deleteUserById(id)
                    .then(response => res.json({'message' : 'user deleted'}))
                    .catch(err => {
                        res.send("Not Deleted")
                    })
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

