//Trae todos lo metodos que considen con filesystem 
const fs = require('fs')

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
   
    return path
} 
    else { console.log('No es un archivo md :(')
}}
} catch(err) {
  result = err;
} 
return result;
}

module.exports={
  validatePath
}