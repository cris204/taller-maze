var http=require("http");
var mazeFactory = require("@mitchallen/maze-generator-square");
var xSize  , ySize ;
var fs = require('fs');
var url=require("url");
var json=require("./prueba");
var mazeGenerator
//////


  fs.readFileSync('./prueba.json');

    var currentPackage = json;
    xSize = currentPackage.xSize ;
    ySize = currentPackage.ySize ;


servidor();


///////

function Crear() {
  mazeGenerator = mazeFactory.create({ x: xSize, y: ySize });
   let spec = {
       open: [
           { border: "N", list: [0,2,xSize-1] }
       ]
   };
   mazeGenerator.generate(spec);
}





function servidor() {


http.createServer(function (request, response) {
   var queryData = url.parse(request.url, true).query;
   if(queryData.x ){

   xSize=queryData.x;


  }
  if(queryData.y){
ySize=queryData.y;
  }

   Crear();

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




  }).listen(process.env.PORT||3000);


}
