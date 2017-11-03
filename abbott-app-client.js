const fetch = require('node-fetch');
const readline = require('readline');
const util = require('util');

const makeRequest = (message) => {
  const abbottWebhook = 'http://localhost:3000/abbott/receive?collectPipeData=true';

  var payload = {
    query: message,
    originalRequest: {
      source: 'abbott',
      user: {
        userId: 123456
      }
    }
  };

  return fetch(abbottWebhook, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((res) => {
    return res.json();
  }).then((res) => {
    return res.message;
  });
};

console.log('Hi, i\'am the Abbott Platform Chat, You can exit this chat any time just saying "exit"! Let\'s talk...\n');
process.stdout.write('YOU: ');

var rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
rl.on('line', function (line) {
  if (line === 'exit') {
    console.log('Exiting the chat...');
    // These two lines together allow the program to terminate. Without
    // them, it would run forever.
    rl.close();
    process.stdin.destroy();
  } else {
    makeRequest(line).then((res) => {
      process.stdout.write(`ABBOTT: ${res.text}\n\n`);

      if (res.pipeData) {
        process.stdout.write('ABBOTT (PIPE-DATA): \n');
        console.log(util.inspect(res.pipeData, {depth: null, colors: true}));
        process.stdout.write('\n\n');
      }      

      process.stdout.write('YOU: ');
    });
  }
});