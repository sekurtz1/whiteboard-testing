// set up ======================================================================
var express = require('express');
var app = express();

// config ======================================================================

app.use('/public', express.static('public'));
 
// routes ======================================================================
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(8090);
console.log('server listening on port 8090');