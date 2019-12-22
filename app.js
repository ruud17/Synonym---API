const synonymsHelper = require('./helper.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 9000;

let synonyms = []; // in memory data (array of arrays / multi dimensional array)

app.get('/', (req, res) => {
    synonyms = []; // when UI is refreshed - clear data from memory

    res.send('Data cleared');
});

app.post('/synonyms', (req, res) => {
    const { data } = req.body;

    try {
        synonyms = [...synonymsHelper.addNewSynonyms(synonyms, data)];
    } catch (error) {
        throw new Error(error);
    }

    res.json({
        message: 'Successfully added new synonyms',
        response: synonyms
    });
});

// /synonyms?searchSynonym=""
app.get('/synonyms', (req, res) => {
    const { synonymValue } = req.query;
    let results = [];

    try {
        results = synonymsHelper.searchSynonyms(synonymValue, synonyms);
    } catch (error) {
        throw new Error(error);
    }

    res.json({
        message: results ? 'Successfully found synonyms' : 'No synonyms found',
        response: results
    });
});

//error middleware
app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(port, () => console.log(`Synonyms API listening on port ${port}!`));
