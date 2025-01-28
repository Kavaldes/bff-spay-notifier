const express = require('express');
const cors = require('cors');
const constants = require('./ConstantsConfig');

const setExpressConfig = () => {
    const app = express();
    app.set('port', constants.port);
    app.use(
        cors({
            origin: new RegExp(constants.corsDns),
        }),
        );
    
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        next();
    });
    return app;
}

module.exports = {
    setExpressConfig
}