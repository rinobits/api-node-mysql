'use strict';


/**
 * Crear producto
 * Se requieren privilegios.
 *
 * body Products  (optional)
 * returns createTrue
 **/
exports.createProduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "CREATED" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar producto
 * Se requieren privilegios
 *
 * id Long Order ID
 * returns deleteTrue
 **/
exports.deleteProduct = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "DELETE DATA" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Editar información
 * Se requieren privilegios.
 *
 * id Long Product ID
 * returns modifyTrue
 **/
exports.editProduct = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "MODIFY DATA" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Buscar un producto por su id.
 * No se requieren privilegos.
 *
 * id Long Product ID
 * returns getProduct
 **/
exports.getProductById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "name" : "Nescafé 100gr",
  "id" : 5,
  "category" : "9 3231 4311",
  "value" : 320000,
  "hasOffer" : 30000,
  "updatedAt" : "2020-06-16T23:05:14.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar productos
 * No se requieren privilegos.
 *
 * returns getProducts
 **/
exports.getProducts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "name" : "Nescafé 100gr",
  "category" : "9 3231 4311",
  "value" : 320000,
  "hasOffer" : 30000,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 5,
  "name" : "Leche entera 1000cc",
  "category" : "9 3231 4311",
  "value" : 320000,
  "hasOffer" : 30000,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 5,
  "name" : "Pan xl",
  "category" : "9 3231 4311",
  "value" : 320000,
  "hasOffer" : 30000,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 5,
  "name" : "Pan xl",
  "category" : "9 3231 4311",
  "value" : 320000,
  "hasOffer" : 30000,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

