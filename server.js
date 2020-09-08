var http = require('http');

http.createServer(onRequest_a).listen(9011);
http.createServer(onRequest_b).listen(9012);

function onRequest_a (req, res) {
  res.write('Hello world from TCP port 9011 (March 06, 2020. 01:10AM).\n');
  res.end();
}

function onRequest_b (req, res) {
  res.write('Hello world from TCP port 9012 (March 06, 2020. 01:10AM).\n');
  res.end();

}

