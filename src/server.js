'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator.js')
const errorHandler = require('./error-handlers/500.js')
const notFound = require('./error-handlers/404.js')

app.use(express.json());
app.use(cors());
app.use(logger);

app.get('/', (req, res) => {
    res.send('Home Route')
})

app.get('/person', validator, (req, res) => {
    res.status(200).json(`Name : ${req.query.name}`)
});

app.use(errorHandler);
app.use('*', notFound);

function start(port) {
    app.listen(port, () => {
        console.log(`running on port ${port}`)
    })
}

module.exports = {
    app: app,
    start: start,
}
