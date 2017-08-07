var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.post('/hire-developers/', function(req, res) {
    console.log(req.body);
    res.status(200).json("received");
});

app.listen(3000);

console.log("Running at Port 3000");