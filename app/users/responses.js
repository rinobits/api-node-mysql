// packages
const boom                      = require('@hapi/boom');

// imports & consts
const UserServices              = require('./services');
const userServices              = new UserServices();

const searchUsers = () => {
    return (req, res, next) => {
        userServices.findUsers()
            .then(responses => {
                let i = 0;
                for(i = 0; i < responses.users.length; i++){
                    delete responses.users[i].dataValues.userPassword;
                }
                responses = {...responses.users};
                res.json(responses);
            })
            .catch(e => {
                e = boom.badRequest(e);
                e.output.payload.message = "Bad Request";
                res.json(e.output.payload);
            })
    }
}
const searchUserById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.findUserById(id)
            .then(response => {
                delete response.user.dataValues.userPassword;
                res.json(response.user.dataValues)
            })
            .catch(e => {
                e = boom.badRequest(e);
                e.output.payload.message = "Bad Request";
                res.json(e.output.payload);
            })
    }
}
const createUser = () => {
    return (req, res, next) => {
        const {body} = req;
        userServices.createUser(body)
            .then(response => res.json({"CREATED": true}))
            .catch(e => {
                e = boom.badRequest(e);
                e.output.payload.message = "Bad Request";
                res.json(e.output.payload);
            })
    }
}
const updateUserById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        userServices.updateUserById(id, body) // (!)
        .then(response => res.json({"MODIFY DATA": true}))
            .catch(e => {
                e = boom.badRequest(e);
                e.output.payload.message = "Bad Request";
                res.json(e.output.payload);
            })
    }
}
const deleteUserById = () => {
    return (req, res, next) => {
        const {id} = req.params
        userServices.deleteUserById(id)
            .then(response => res.json({'DELETE DATA' : true}))
            .catch(e => {
                e = boom.badRequest(e);
                e.output.payload.message = "Bad Request";
                res.json(e.output.payload);
            })
    }
}
module.exports = {
    searchUsers,
    searchUserById,
    createUser,
    updateUserById,
    deleteUserById
};

