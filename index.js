//Usar metodos de node
const process = require('node:process');
const {validatePath} = require('./validatePath')
const {extractorLinks} = require('./extractorLink')

const mdlinks =(path)=>{
    const file=validatePath(path);
    console.log(extractorLinks(file));
}

mdlinks(process.argv[2])