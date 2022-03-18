/* Create a simple web server outputting “hello world” */

/* Your app should respond to different URL’s by serving different content to the browser. This can be done by studying the request.url –parameter.*/


if (request.url === “/”){

// do something
} 
else if (request.url === “/helloworld”){
// do something
} 

console.log('Server running on port: 8000');
