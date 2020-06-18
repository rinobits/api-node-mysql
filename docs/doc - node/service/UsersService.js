'use strict';


/**
 * Crear usuario
 * Se requieren privilegios.
 *
 * body Users  (optional)
 * returns createTrue
 **/
exports.createUser = function(body) {
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
 * Eliminar usuario
 * Se requieren privilegios.
 *
 * id Long Order ID
 * returns deleteTrue
 **/
exports.deleteUser = function(id) {
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
exports.editUser = function(id) {
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
 * Buscar usuario por su id.
 * No se requieren privilegos.
 *
 * id Long Order ID
 * returns getUser
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2020-06-15T21:33:42.000Z",
  "id" : 1,
  "userName" : "Arath",
  "updatedAt" : "2020-06-15T21:33:42.000Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Listar usuarios
 * No se requieren privilegos.
 *
 * returns getUsers
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "users" : {
    "0" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "id" : 0,
      "userName" : "Arath",
      "updatedAt" : "2020-06-15T22:04:30.000Z"
    },
    "1" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "id" : 1,
      "userName" : "Sisifo",
      "updatedAt" : "2020-06-15T22:04:30.000Z"
    },
    "2" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "id" : 2,
      "userName" : "Serafin",
      "updatedAt" : "2020-06-15T22:04:30.000Z"
    },
    "3" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "id" : 3,
      "userName" : "Lilo",
      "updatedAt" : "2020-06-15T22:04:30.000Z"
    },
    "4" : {
      "createdAt" : "2020-06-15T22:04:30.000Z",
      "id" : 4,
      "userName" : "Deasy",
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

