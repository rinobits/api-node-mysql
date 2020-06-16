// package
const jwt                       = require('jsonwebtoken');
const boom                      = require('@hapi/boom');
// imports & consts 
const {config:{authJwtSecret}}  = require('../../config');
const OrderServices = require('./services');
const orderServices = new OrderServices();
//.catch(e => next(boom.badImplementation(e)));
const searchOrders = () => {
    return (req, res, next) => {
        orderServices.findOrders()
            .then(responses => res.json({orders: responses}))
            .catch(e => next(boom.badImplementation(e)));
        }
}
const searchOrderById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        orderServices.findOrderById(id)
            .then(response => {
                delete response.orderPassword;
                res.json({order: response})
            })
            .catch(e => next(boom.badImplementation(e)));
        }
}
const createOrder = () => {
       return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                next(boom.badImplementation(err))
            }else{
                const {body} = req;
                orderServices.createOrder(body)
                    .then(response => res.json({id: response}))
                    .catch(e => next(boom.badImplementation(e)));
            }
        });
        }
}
const updateOrderById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                next(boom.badImplementation(err))
            }else{
                const {body} = req;
                const {id}   = req.params;
                orderServices.updateOrderById(id, body) // (!)
                    .then(response => res.json({id: response}))
                    .catch(e => next(boom.badImplementation(e)));
            }
        });
        }
}
const deleteOrderById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                next(boom.badImplementation(err))
            }else{
                const {id} = req.params
                orderServices.deleteOrderById(id)
                    .then(response => res.json({message : 'order deleted'}))
                    .catch(e => next(boom.badImplementation(e)));
            }
        });
    }
}
module.exports = {
    searchOrders,
    searchOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById
};

