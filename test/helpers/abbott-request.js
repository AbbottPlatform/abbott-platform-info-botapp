const fetch = require('node-fetch');

module.exports = (message, userId = 123456) => {
  const baseAddress = 'http://localhost:3000';
  const abbottWebhook = `${baseAddress}/abbott/receive?collectPipeData=true`;
  
  var payload = {
    query: message,
    originalRequest: {
      source: 'abbott',
      user: {
        userId: userId
      }
    }
  };

  return fetch(abbottWebhook, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((res) => res.json());
};