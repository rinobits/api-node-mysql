
const boom = require('@hapi/boom');
const {config} = require('../../config');

const logError = (err, req, res, next) => {
    next(err);
}
const wrapError = (err, req, res, next) => {
        if(!err.isBoom){
            err = boom.badImplementation(err);
            next(err);
        }
        next(err);
}
const withErrorStack = (err, stack) => {
    if(config.dev){
        return {error: err, stack}
    }
    err.statusCode = 400;
    err.message    = "Bad Implementation";
    err.error      = "Bad Implementation";
    return {error: err}
}
const errorHandler = (err, req, res, next) => {
    const {output: {statusCode, payload}} = err;
    res.status(statusCode).json(withErrorStack(payload, err.stack));
}
module.exports = {
    logError,
    wrapError,
    errorHandler
}
