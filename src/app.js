const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'})

const app = express();

const port = process.env.PORT || 5000;

const routes = require('./routes');
app.use('/api/v1/bootcamps', routes)


app.listen(port, () => {
    console.log(`App running in ${process.env.NODE_ENV} on port ${port}`);
});