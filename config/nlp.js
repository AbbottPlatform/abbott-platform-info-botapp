const nlp = {};

console.log('==============> APIAI_TOKEN: ', process.env.NLP_APIAI_TOKEN.substring(1, 4));

nlp.apiai = { "token": process.env.NLP_APIAI_TOKEN };
    
module.exports = nlp;