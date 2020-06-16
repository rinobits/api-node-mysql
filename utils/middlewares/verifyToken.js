boom = require('@hapi/boom');
module.exports = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader != undefined){ 
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        next(boom.unauthorized());
    }
}


