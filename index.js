const http =require('http');
const fs =require('fs');
const path =require('path');
// const data =require('data');
const qs =require('querystring'); // read the url with the query string


//create a server
var server = http.createServer(function(request,response){
if (request.method ==="GET") {
  if (request.url === "/" || request.url === "/home" || request.url === "/index") {

    fs.readFile('./public/index.html','UTF-8', function(err,contents) {
      if (err) {
        console.log("error");
      } else {
        response.writeHead(200, {'Content-Type':  'text/html'});
        response.end(contents);
      } //if else
    }) // readFile ends
  } // checking url ends


  else if (request.url === "/about" || request.url === "/about.html") {

    fs.readFile('./public/about.html','UTF-8', function(err,contents) {
      if (error) {
        console.log("error");
      } else {
        response.writeHead(200, {'Content-Type':  'text/html'});
        response.end(contents);
      } //if else
    }) // readFile ends
  } // checking url ends


  else if (request.url === "/news" || request.url === "/news.html") {

    fs.readFile('./public/news.html','UTF-8', function(err,contents) {
      if (error) {
        console.log("error");
      } else {
        response.writeHead(200, {'Content-Type':  'text/html'});
        response.end(contents);
      } //if else
    }) // readFile ends
  } // checking url ends


  else if (request.url === "/contacts" || request.url === "/contacts.html") {

    fs.readFile('./public/contacts.html','UTF-8', function(err,contents) {
      if (error) {
        console.log("error");
      } else {
        response.writeHead(200, {'Content-Type':  'text/html'});
        response.end(contents);
      } //if else
    }) // readFile ends
  } // checling url ends
  // requested url must be css file and that file is checked for matching
  else if (request.url.match(/.css$/)) {
    var cssPath = path.join(__dirname,'public', request.url); //get the path
    var fileStream = fs.createReadStream(cssPath, 'UTF-8'); // creating file fileStream
    response.writeHead(200, 200, {'Content-Type':  'text/css'});
    fileStream.pipe(response);
  } // css path





} // GET methods ends







}).listen(3000);
console.log("server running at http://192.168.33.10:3000/");
