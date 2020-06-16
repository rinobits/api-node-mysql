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
                res.json({users: responses});
            })
            .catch(res.json({error: "not done"}))
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
            .catch(res.json({error: "not done"}))
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
                    .catch(res.json({error: "not Created"}));
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
                    .catch(res.json({error: "not Updated"}))
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
                    .then(response => res.json({message : 'user deleted'}))
                    .catch(res.json({error: "not deleted"}))
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

