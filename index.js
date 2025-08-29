const theHTTP = require("http");

const file= require("fs").promises;

let htmlHeader = "text/html;";
let jsonHeader = "application/json;";



const listenerResponse = function(request, response){
    console.log( request.url );
    
    if(request.url === '/'){
         file.readFile(__dirname + "/index.html").then(homePage =>{
            createHeader(htmlHeader);
            response.end(homePage);
         });
    }
    else{
        file.readFile(__dirname + "/userdata.json").then(jsonData =>{
            createHeader(jsonHeader);
            response.end(jsonData);
        });
    }

    function createHeader(headerType, dataType){
        response.setHeader("Content-Type", headerType + " charset=UTF-8");

        response.writeHead(200);

    }

    
}

let theServer = theHTTP.createServer(listenerResponse);

theServer.listen(8080, "127.0.0.1");

