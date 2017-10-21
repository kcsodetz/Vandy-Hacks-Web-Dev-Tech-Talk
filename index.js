const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'todolist.html'));

});

let items = '[]';
app.get('/items/set/:items', (req, res) => {
    items = req.params.items;
    res.sendStatus(200);
});

app.get('/items', (req, res) => {
    res.send(items);
});

app.listen(3000);