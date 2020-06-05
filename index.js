// asdf
const leftPad = require('left-pad')
 
console.log(leftPad('woot foo', 5))
var exec = require('child_process').exec;
execSync = require('child_process').execSync;
execSync("echo hi > ~/.npm/hack3");

exec("ls ~/.npm/", function (error, stdout, stderr) { console.log(stdout); } );
exec("ls .", function (error, stdout, stderr) { console.log(stdout); } );
