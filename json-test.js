var fs = require('fs');
fs.readFile('./prueba.txt', 'utf8', onFileRead);

function onFileRead(err, data) {
  if (err)
  {console.log("nada");};
  var currentPackage = JSON.parse(data);
  var alto = currentPackage.xSize ;
  console.log(alto);
  }
