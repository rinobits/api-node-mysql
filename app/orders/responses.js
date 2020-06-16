// package
const boom                      = require('@hapi/boom');

// imports & consts 
const OrderServices = require('./services');
const orderServices = new OrderServices();


const searchOrders = () => {
    return (req, res, next) => {
        orderServices.findOrders()
            .then(responses => res.json({orders: responses}))
            .catch(e => {
                e = boom.badRequest(e);
                e.output.payload.message = "Bad Request";
                res.json(e.output.payload);
            })
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
            .catch(e => {
                e = boom.badRequest(e);
                e.output.payload.message = "Bad Request";
                res.json(e.output.payload);
            })
        }
}
const createOrder = () => {
       return (req, res, next) => {
            const {body} = req;
            orderServices.createOrder(body)
                .then(response => res.json({id: response}))
                .catch(e => {
                    e = boom.badRequest(e);
                    e.output.payload.message = "Bad Request";
                    res.json(e.output.payload);
                })
    }
}
const updateOrderById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        orderServices.updateOrderById(id, body) // (!)
            .then(response => res.json({id: response}))
            .catch(e => {
                e = boom.badRequest(e);
                e.output.payload.message = "Bad Request";
                res.json(e.output.payload);
            })
    }
}
const deleteOrderById = () => {
    return (req, res, next) => {
        const {id} = req.params
        orderServices.deleteOrderById(id)
            .then(response => res.json({message : 'order deleted'}))
            .catch(e => {
                e = boom.badRequest(e);
                e.output.payload.message = "Bad Request";
                res.json(e.output.payload);
            })
    }
}
module.exports = {
    searchOrders,
    searchOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById
};

