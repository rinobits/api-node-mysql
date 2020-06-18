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
    examples['application/json'] = {
  "orders" : {
    "0" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "phone" : "9332 4343",
      "name" : "Arath",
      "description" : "Los productos adjuntos van a El litre 2390, Valparaíso",
      "deposit" : 70000,
      "id" : 0,
      "message" : "No aplica",
      "value" : 120000,
      "email" : "jc.webservicdes@agilesolutions.com",
      "updatedAt" : "2020-06-15T22:04:30.000Z"
    },
    "1" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "phone" : "9332 4343",
      "name" : "Arath",
      "description" : "Los productos adjuntos van a El litre 2390, Valparaíso",
      "deposit" : 70000,
      "id" : 1,
      "message" : "No aplica",
      "value" : 120000,
      "email" : "jc.webservicdes@agilesolutions.com",
      "updatedAt" : "2020-06-15T22:04:30.000Z"
    },
    "2" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "phone" : "9332 4343",
      "name" : "Arath",
      "description" : "Los productos adjuntos van a El litre 2390, Valparaíso",
      "deposit" : 70000,
      "id" : 2,
      "message" : "No aplica",
      "value" : 120000,
      "email" : "jc.webservicdes@agilesolutions.com",
      "updatedAt" : "2020-06-15T22:04:30.000Z"
    },
    "3" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "phone" : "9332 4343",
      "name" : "Arath",
      "description" : "Los productos adjuntos van a El litre 2390, Valparaíso",
      "deposit" : 70000,
      "id" : 3,
      "message" : "No aplica",
      "value" : 120000,
      "email" : "jc.webservicdes@agilesolutions.com",
      "updatedAt" : "2020-06-15T22:04:30.000Z"
    },
    "4" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "phone" : "9332 4343",
      "name" : "Arath",
      "description" : "Los productos adjuntos van a El litre 2390, Valparaíso",
      "deposit" : 70000,
      "id" : 4,
      "message" : "No aplica",
      "value" : 120000,
      "email" : "jc.webservicdes@agilesolutions.com",
      "updatedAt" : "2020-06-15T22:04:30.000Z"
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

