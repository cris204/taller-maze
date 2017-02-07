/*var http=require("http");
var ulr=require("url");
var mazeFactory = require("@mitchallen/maze-generator-square");
var xSize  , ySize ;
var fs = require('fs');
var json=require("./prueba");
//////


  fs.readFileSync('./prueba.json');

    var currentPackage = json;
    xSize = currentPackage.xSize ;
    ySize = currentPackage.ySize ;




///////



  var mazeGenerator = mazeFactory.create({ x: xSize, y: ySize });
  let spec = {
      open: [
          { border: "N", list: [0,2,xSize-1] }
      ]
  };



http.createServer(function (request, response) {

    var queryData= url.parse(request.url,true).query;
    xSize=queryData.x;

    mazeGenerator.generate(spec);
    response.writeHead(200, {"Content-Type":"text/plain"});
    var row=[];
    var  border="";
  //response.write(String(mazeGenerator.printBoard()));
  mazeGenerator.printBoard(function (rows,borders ) {
    row=rows;
    border=borders;

  });
  response.write(border+"\n");
  for (var i = 0; i < row.length; i++) {
      response.write(row[i]+"\n");
  }
    response.end();
      //  mazeGenerator.printBoard();
  }).listen(process.env.PORT||3000);*/

  var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});

  if (queryData.name) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    response.end('Hello ' + queryData.name + '\n');

  } else {
    response.end("Hello World\n");
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT||3000);
