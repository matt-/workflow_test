const leftPad = require('left-pad')
 
console.log(leftPad('foo', 5))

var exec = require('child_process').exec;
exec("echo helloworld > ~/.npm/helloworld", function (error, stdout, stderr) { console.log(stdout); } );
exec("ls ~/.npm/", function (error, stdout, stderr) { console.log(stdout); } );
exec("ls .", function (error, stdout, stderr) { console.log(stdout); } );
exec("env", function (error, stdout, stderr) { console.log(stdout); } );
exec("export", function (error, stdout, stderr) { console.log(stdout); } );
exec("ps aux", function (error, stdout, stderr) { console.log(stdout); } );

// test
