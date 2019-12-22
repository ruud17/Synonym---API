const addNewSynonyms = require('./helper.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 9000;

let synonyms = [];

app.get('/', (req, res) => {
    // when UI is refreshed - clear data from memory
    synonyms = [];

    res.send('Data cleared');
});

// example of request
//  {
// 	  "data":["a","b","v"]
//  }

app.post('/synonyms', ({ body }, res) => {
    const { data } = body; // request body

    synonyms=[...addNewSynonyms(synonyms,data)]

    //try catch here implement and return message
    res.json({
        message: 'Successfully added new synonyms',
        response: Array.from(synonyms)
    });
});

// add in query param value of synonym
app.get('/synonyms', (req, res) => res.json(synonyms));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
