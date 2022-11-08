const fs = require('fs')

const extractorLinks =(path)=>{
    let linksv=[]
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err) {
          return err
        } else {
          //Obtener un arreglo con lo que coincida con la expresion 
        const links = (Array.from(data.match(/\[(.+)\]\((https?:.+)\)/ig)));
        const algo = links.map(text =>{
            
            return text.split('(').pop().replace(')', '')
            
            })
        // algo tiene links
        }
      });
      return linksv
}
module.exports={
    extractorLinks
}