const express = require('express');
const morgan = require('morgan');
const apps = require('./playstore.js');

const app = express();

app.get('/apps', (req, res) => {
    
    const { sort } = req.query;

    if (sort) {
        (sort === 'rating) || (sort === 'app') ? true : false;
    }

    res.json(apps);
})

app.listen(8000, () => {
    console.log('Server listening on PORT 8000');
})