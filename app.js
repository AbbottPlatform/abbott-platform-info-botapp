const fs = require('fs');

if (fs.existsSync(__dirname + '/.env')) {
  const env = require('node-env-file');
  env(__dirname + '/.env');
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