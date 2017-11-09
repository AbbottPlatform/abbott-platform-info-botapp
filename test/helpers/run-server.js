const fs = require('fs');

if (fs.existsSync(__dirname + '/.env')) {
  const env = require('node-env-file');
  env(__dirname + '/.env');
}

const TestAppServer = require(__dirname + '/test-app-server');
const testApp = new TestAppServer();

testApp.start()
  .then(() => {
    if (process.send) {
      process.send('listening');
    }
  });