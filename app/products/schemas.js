// packages
const Joi      = require('@hapi/joi');
// consts
const name     = Joi.string().min(2).max(15);
const category = Joi.string().min(3).max(20).allow("");
const value    = Joi.number().min(1).max(1000000).allow("");
const hasOffer = Joi.number().min(1).max(999999).allow("");

const productSchemaCreate = Joi.object({
    name :   name.required(),
    category: category.required(),
    value:     value.required(),
    hasOffer
});
const productSchemaUpdate = Joi.object({
    name,
    category,
    value,
    hasOffer
});

module.exports = {
    productSchemaCreate,
    productSchemaUpdate
}