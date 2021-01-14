const fetch = require('node-fetch');
const express = require('express');

var port = 8080;
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');  //open html file
    
});


var server=app.listen(port, function () {
    console.log('Server running at http://localhost:%s', port);
});
