//Trae todos lo metodos que considen con filesystem 
const fs = require('fs')
//Usar metodos de node
const process = require('node:process');
//Funcion que valide la ruta (path)
const validatePath = (path) => {
    let result = 'no exist';
try {
  //Si es valida la ruta el status cambia 
  if (fs.existsSync(path)) {
   result = 'exist';
   //Validar que sea un archivi md
   const rut = (path.split(".").pop());
   if ( rut == 'md'){ 
    //Si es un archivi md, entonces se lee el archivo
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err) {
          console.log(err);
        } else {
          //Obtener un arreglo con lo que coincida con la expresion 
          console.log(Array.from(data.match(/\[(.+)\]\((https?:.+)\)/ig)));
        }
      });
    console.log('Si es un archivo md  :) ')
} 
    else { console.log('No es un archivo md :(')
}}
} catch(err) {
  result = err;
} 
return result;
}
 validatePath(process.argv[2]);