var http = require('http')

// technically function should take response as a parameter
  http.get(process.argv[2], function (request) {
  	//console.log(process.argv[2])
    request.setEncoding('utf8')
    request.on('data', console.log)
    request.on('error', console.error)
  })	