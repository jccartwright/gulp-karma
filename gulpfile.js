var Server = require('karma').Server;
const { exec } = require('child_process');

/**
 * Run test once and exit
 */
function testTask(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
};

/**
 * Watch for file changes and re-run tests on each change
 */

function execTask() {
   return exec('ls -al');
}

function tddTask(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
};

exports.default = tddTask;
exports.test = testTask;
exports.exec = execTask;
