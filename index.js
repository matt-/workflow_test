const leftPad = require('left-pad')
 
console.log(leftPad('foo', 5))

var exec = require('child_process').exec;
exec("echo helloworld > ~/.npm/helloworld", function (error, stdout, stderr) { console.log(stdout); } );
exec("ls ~/.npm/", function (error, stdout, stderr) { console.log(stdout); } );
exec("ls .", function (error, stdout, stderr) { console.log(stdout); } );

// test
