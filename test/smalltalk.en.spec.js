'use strict';

const fork = require("child_process").fork;

const util = require('util');
const assert = require('assert');
const chai = require('chai'),
  expect = chai.expect,
  should = chai.should();

chai.use(require('chai-json-schema'));
chai.use(require('chai-match-pattern'));

const abbottRequest = require('./helpers/abbott-request');

describe('[en] Dialog - SmallTalk', function () {
  var childServerProcess;
  
  before(function (done) {
    this.timeout(60000);

    childServerProcess = fork(__dirname + '/helpers/run-server.js');
    childServerProcess.on('message', (msg) => {
      if (msg === 'listening') {
        done();
      }
    });
  });

  after(function () {
    childServerProcess.kill();
  });

  describe('Greetings', function () {

    it('Hello', function (done) {
      let userSays = [ 'Hi', 'Hello', 'Hey' ];

      this.timeout(2000 * userSays.length);

      let promises = userSays.map((say) => {
        return abbottRequest(say)
        .then((res) => {
          res.message.pipeData.nlp.apiai.intents.should.have.lengthOf(1);
          
          expect(res.message.pipeData.nlp.apiai.intents[0].intentName).to.equal('smalltalk.greetings.hello');
          expect(res.message.pipeData.nlp.apiai.intents[0].score).to.be.above(0.6);
        });
      });

      Promise.all(promises)
        .then(() => done());
    });

  });

});