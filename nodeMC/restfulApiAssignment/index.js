// Dependancies
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var config = require('./config');

// Initiating http server
var httpServer = http.createServer(function(req, res) {
    unifiedServer(req, res);
});

// Start the server and have it listen on port 3000
httpServer.listen(config.httpPort, function() {
    console.log('The server is listening on port ' + config.httpPort);
});

var unifiedServer = function(req, res) {

    // Get the url and parse it
    var parsedUrl = url.parse(req.url, true);

    // Get path from the url
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get the query string as an object
    var queryStringObject = parsedUrl.query;
    console.log(parsedUrl)
    console.log(queryStringObject, 'hello');

    // Get the HTTP method
    var method = req.method.toLowerCase();

    // Get the headers as an object
    var headers = req.headers;
    console.log(headers);

    // Get the payload if there is any
    var decoder = new StringDecoder('utf-8');
    var buffer = '';

    req.on('data', function(data) {
        buffer += decoder.write(data);
    });
    req.on('data', function() {
        buffer += decoder.end();
    });

    // Choose the handler the request should go to
    var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    // COnstruct the data object to send to the handler
    var data = {
        'trimmedPath': trimmedPath,
        'queryStringObject': queryStringObject,
        'method': method,
        'headers': headers,
        'payload': buffer
    };

    // Route the request specified in the router
    chosenHandler(data, function(statusCode, payload) {
        statusCode = typeof(statusCode == 'number') ? statusCode : 200;
        payload = typeof(payload) == 'object' ? payload : {};
        var payloadString = JSON.stringify(payload);
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        res.end(payloadString);
        console.log('Returning this payload responce', statusCode, payloadString);
    });
};

var handlers = {};

handlers.ping = function(data, callback) {
    callback(200);
};

handlers.hello = function(data, callback) {
    callback(200, {"message": "Welcome to the site"});
};

handlers.notFound = function(data, callback) {
    callback(404);
};

var router = {
    'ping': handlers.ping,
    'hello': handlers.hello
};