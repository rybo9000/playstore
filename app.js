const express = require('express');
const morgan = require('morgan');
const apps = require('./playstore.js');

const app = express();

app.use(morgan('dev'));

app.get('/apps', (req, res) => {
    
    const { sort, genres } = req.query;

    if (sort) {
        if (!['rating', 'app'].includes(sort)) {
          return res
            .status(400)
            .send('Sort must be one of rating or app');
        }
      }

      if (genres) {
        if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genres)) {
          return res
            .status(400)
            .send('Genres must be one of Action, Puzzle, Strategy, Casual, Arcade, or Card');
        }
      }

      let results = apps;

      if (genres) {
        results = results.filter(result => result.Genres === genres);
      }
      
      if (sort) {
        results
          .sort((a, b) => {
            return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
        });
      }

      res.json(results);
})

app.listen(8000, () => {
    console.log('Server listening on PORT 8000');
})