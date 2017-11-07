const fs = require('fs');

const envFile = (process.env.envFile) ? process.env.envFile : '.env';
const envFilePath = `${__dirname}/${envFile}`;

//------------------
fs.readdir(__dirname, function(err, items) {
   console.log(items);
   for (var i=0; i<items.length; i++) {
       console.log(items[i]);
   }
});
//------------------

if (fs.existsSync(envFilePath)) {
  const env = require('node-env-file');
  env(envFilePath);
}

const { AbbottFramework } = require('@abbott-platform/abbott-framework');

var abbottConfig = {
  botName: 'abbott-platform-info-botapp',
  port: process.env.PORT || 3000,
  platforms: require('./config/platforms'),
  nlp: require('./config/nlp')
};
  
const abbottFramework = new AbbottFramework(abbottConfig);

abbottFramework.start();

console.log('Abbott Framework Initialized!');