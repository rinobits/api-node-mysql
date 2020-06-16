// package
const jwt                       = require('jsonwebtoken');
const boom                      = require('@hapi/boom');
// imports
const {config:{authJwtSecret}}  = require('../../config');
const ProductServices           = require('./services');
const productServices           = new ProductServices();

const searchProducts = () => {
    return (req, res, next) => {
        productServices.findProducts()
            .then(responses => res.json({products: responses}))
            .catch(e => next(boom.badImplementation(e)));
        }
}
const searchProductById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productServices.findProductById(id)
            .then(response => {
                delete response.productPassword;
                res.json({product: response})
            })
            .catch(e => next(boom.badImplementation(e)));
    }
}
const createProduct = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                next(boom.badImplementation(err))
            }else{
                const {body} = req;
                productServices.createProduct(body)
                    .then(response => res.json({id: response}))
                    .catch(e => next(boom.badImplementation(e)));
            }
        });
    }
}
const updateProductById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                next(boom.badImplementation(err))
            }else{
                const {body} = req;
                const {id}   = req.params;
                productServices.updateProductById(id, body) // (!)
                    .then(response => res.json({id: response}))
                    .catch(e => next(boom.badImplementation(e)));
            }
        });
    }
}
const deleteProductById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                next(boom.badImplementation(err))
            }else{
                const {id} = req.params
                productServices.deleteProductById(id)
                    .then(response => res.json({message : 'product deleted'}))
                    .catch(e => next(boom.badImplementation(e)));
            }
        });
        }
}
module.exports = {
    searchProducts,
    searchProductById,
    createProduct,
    updateProductById,
    deleteProductById
};

