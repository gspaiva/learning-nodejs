var http = require('http');

function onRequest(request, response){
    console.log("the user made a resquest" + request.url);
    response.writeHead(200,{"Context-type":"text/plain"});
    response.write("Here is your response");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now runing");
