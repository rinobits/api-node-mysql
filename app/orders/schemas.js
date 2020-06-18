const Joi = require('@hapi/joi');

const name          = Joi.string().min(2).max(15);
const phone         = Joi.string().min(8).max(15);
const email         = Joi.string().email();
const description   = Joi.string().allow("");
const message       = Joi.string().allow("");
const value         = Joi.number().min(1).max(1000000).allow("");
const deposit       = Joi.number().min(1).max(999999).allow("");
const id               = Joi.number().min(0);

const idSchema         = Joi.object({
    id: id.required()
})
const orderSchemaCreate = Joi.object({
    name : name.required(),
    phone,
    email:   email.when('phone', {is: Joi.exist(), then: Joi.optional(), otherwise: Joi.required()}),
    description,
    message,
    value,
    deposit
});

const orderSchemaUpdate = Joi.object({
    name,
    phone,
    email,
    description,
    message,
    value,
    deposit
});

module.exports = {
    orderSchemaCreate,
    orderSchemaUpdate,
    idSchema
}