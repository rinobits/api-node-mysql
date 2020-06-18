'use strict';


/**
 * Crear orden
 * Se requieren privilegios.
 *
 * body Orders  (optional)
 * returns createTrue
 **/
exports.createOrder = function(body) {
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
 * Eliminar orden
 * Se requieren privilegios
 *
 * id Long Order ID
 * returns deleteTrue
 **/
exports.deleteOrder = function(id) {
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
 * id Long Order ID
 * returns modifyTrue
 **/
exports.editOrder = function(id) {
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
 * Buscar una orden por su id.
 * No se requieren privilegos.
 *
 * id Long Order ID
 * returns getOrder
 **/
exports.getOrderById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "phone" : "9 3231 4311",
  "name" : "Juan Carlos",
  "description" : "Los productos adjuntos van a El litre 2390, Valparaíso",
  "deposit" : 170000,
  "id" : 5,
  "message" : "Entregar a la brevedad",
  "value" : 320000,
  "email" : "jc.webservicdes@agilesolutions.com",
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
 * Listar órdenes
 * No se requieren privilegos.
 *
 * returns getOrders
 **/
exports.getOrders = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "name" : "Nescafé 100gr",
  "phone" : "9 3231 4311",
  "description" : "Some descriptiond",
  "message" : "And a message",
  "value" : 320000,
  "deposit" : 30000,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 5,
  "name" : "Leche entera 1000cc",
  "phone" : "9 3231 4311",
  "description" : "Some descriptiond",
  "message" : "And a message",
  "value" : 320000,
  "deposit" : 30000,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 5,
  "name" : "Pan xl",
  "phone" : "9 3231 4311",
  "description" : "Some descriptiond",
  "message" : "And a message",
  "value" : 320000,
  "deposit" : 30000,
  "createdAt" : "2020-06-16T20:05:48.000Z",
  "updatedAt" : "2020-06-16T23:05:14.000Z"
}, {
  "id" : 5,
  "name" : "Pan xl",
  "phone" : "9 3231 4311",
  "description" : "Some descriptiond",
  "message" : "And a message",
  "value" : 320000,
  "deposit" : 30000,
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

