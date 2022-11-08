const  fetch = require('node-fetch');

const validateLink=(justLink)=>{
    return fetch(justLink).then(response=>{
        return response.status
      })
}
module.exports={
    validateLink
}

/*
validateLink('https://laspromesasdemiex.com').then(status=>{
    console.log(status);
}).catch(err=>{
    console.log('404');
});
*/