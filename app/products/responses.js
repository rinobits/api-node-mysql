// package
const boom                      = require('@hapi/boom');

// imports
const ProductServices           = require('./services');
const productServices           = new ProductServices();

const searchProducts = () => {
    return (req, res, next) => {
        productServices.findProducts()
        .then(responses => {
            let i = 0;
            let tmp = []
            for(i = 0; i < responses.length; i++){
                tmp[i] = responses[i].dataValues;
            }
            responses = tmp;
            res.json([...responses])
        })
        .catch(e => next(boom.badImplementation(e)))
        }
}
const searchProductById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productServices.findProductById(id)
            .then(response => {
                delete response.productPassword;
                res.json(response)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const createProduct = () => {
    return (req, res, next) => {
        const {body} = req;
        productServices.createProduct(body)
        .then(response => res.json({"CREATED": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const updateProductById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        productServices.updateProductById(id, body) 
            .then(response => res.json({"MODIFY DATA": true}))
            .catch(e => next(boom.badImplementation(e)))
        }
    }
const deleteProductById = () => {
    return (req, res, next) => {
        const {id} = req.params
        productServices.deleteProductById(id)
        .then(response => res.json({'DELETE DATA' : true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    searchProducts,
    searchProductById,
    createProduct,
    updateProductById,
    deleteProductById
};

