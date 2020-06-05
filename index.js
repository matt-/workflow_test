// test x
const leftPad = require('left-pad')
 
console.log(leftPad('foo', 5))
var exec = require('child_process').exec;
execSync = require('child_process').execSync;
execSync("echo hi > ~/.npm/hack3");
console.log(execSync("ls ~/.npm/").toString());
console.log("in PR...")
//exec("ls ~/.npm/", function (error, stdout, stderr) { console.log(stdout); } );
//exec("ls .", function (error, stdout, stderr) { console.log(stdout); } );
