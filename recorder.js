const exec = require('child_process').exec;

if(process.argv.length < 6){
  console.log('usage: node recorder.js [url] [path] [fileName] [duration] ')
  return -1;
}
const url = process.argv[2];
const path = process.argv[3];
const fileName = process.argv[4];
const duration = process.argv[5]*60000 + 5000; //5000 for startup time

const icy = exec('icy-rip '+ url + ' ' + path + ' ' + fileName + ' -d', { timeout: duration });

