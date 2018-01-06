//  Activating Server
/*
var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!");
    response.end();
}).listen(8888);
*/

var http = require('http');
//  요청을 하고 응답을 받는다.
function onRequest(request, response){
    console.log("사용자가 request 합니다"+ request.url);
    //  200: 정상적인 접속 번호
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("This is server response(data...)");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is running");