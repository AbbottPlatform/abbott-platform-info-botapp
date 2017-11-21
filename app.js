const fs = require('fs');
const path = require('path');

if (fs.existsSync(__dirname + '/.env')) {
  const env = require('node-env-file');
  env(__dirname + '/.env');
} else if (fs.existsSync(__dirname + '/env-prd')) {
  const env = require('node-env-file');
  env(__dirname + '/env-prd');
}  

const { AbbottFramework } = require('@abbott-platform/abbott-framework');

var abbottConfig = {
  botName: 'abbott-platform-info-botapp',
  port: process.env.PORT || 3000,
  platforms: require('./config/platforms'),
  nlp: require('./config/nlp'),
  webserver: {
    baseRoutes: [
      path.join(__dirname, 'routes/health_check')
    ]
  }
};
  
const abbottFramework = new AbbottFramework(abbottConfig);

let version = process.env.CI_VERSION || 'x';
abbottFramework.start()
  .then(() => {
    console.log(`Abbott Framework Initialized! (1.0.${version})`);
  });