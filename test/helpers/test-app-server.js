const { AbbottFramework } = require('@abbott-platform/abbott-framework');

const abbottConfig = {
  botName: 'abbott-platform-info-botapp',
  port: 3000,
  platforms: {
    abbott: {}
  },
  nlp: {
    apiai: { "token": process.env.NLP_APIAI_TOKEN }
  }
};

module.exports = class {
  constructor() {    
    this.abbottFramework = new AbbottFramework(abbottConfig);    
  }

  start() {
    return this.abbottFramework.start();
  }

  stop() {
    return this.abbottFramework.stop();
  }
};