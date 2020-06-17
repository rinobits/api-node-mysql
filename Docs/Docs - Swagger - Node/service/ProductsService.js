'use strict';


/**
 * Crear producto
 * Se requieren privilegios.
 *
 * returns createTrue
 **/
exports.createProduct = function() {
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
 * returns deleteTrue
 **/
exports.deleteUser = function() {
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
 * returns modifyTrue
 **/
exports.editProduct = function() {
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
    examples['application/json'] = {
  "products" : {
    "0" : {
      "createdAt" : "2020-06-16T20:05:48.000Z",
      "name" : "Nescafé 150gr",
      "id" : 5,
      "category" : "9 3231 4311",
      "value" : 320000,
      "hasOffer" : 30000,
      "updatedAt" : "2020-06-16T23:05:14.000Z"
    },
    "1" : {
      "createdAt" : "2020-06-16T20:05:48.000Z",
      "name" : "Nescafé 100gr",
      "id" : 5,
      "category" : "9 3231 4311",
      "value" : 320000,
      "hasOffer" : 30000,
      "updatedAt" : "2020-06-16T23:05:14.000Z"
    },
    "2" : {
      "createdAt" : "2020-06-16T20:05:48.000Z",
      "name" : "Leche entera 1000cc",
      "id" : 5,
      "category" : "9 3231 4311",
      "value" : 320000,
      "hasOffer" : 30000,
      "updatedAt" : "2020-06-16T23:05:14.000Z"
    },
    "3" : {
      "createdAt" : "2020-06-16T20:05:48.000Z",
      "name" : "Pan xl",
      "id" : 5,
      "category" : "9 3231 4311",
      "value" : 320000,
      "hasOffer" : 30000,
      "updatedAt" : "2020-06-16T23:05:14.000Z"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

