// var http = require('http')
// var me = require('./jacob')
//
// // var onRequest = function(req, res){
// //   // req = request - What the server gets from the client/browser/user
// //   // res = response - an object you use to send a response from the server to the client/browser/user
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/html')
// //   res.end('<h1>Hi, you!</h1>')
// //
// // }
//
// var onRequest = function(req, res){
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify(me))
// }
//
// var server = http.createServer()
// server.on('request', onRequest)
// server.listen(9001)
