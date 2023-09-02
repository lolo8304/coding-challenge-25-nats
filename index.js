var express = require('express');
var app     = express();
var port = process.env.port || 3000;
var ioProm  = require('express-socket.io');
var server  = ioProm.init(app);

// ... app attachments

server.listen(port, function() {
    console.log('Server listening on port: ', port);
});