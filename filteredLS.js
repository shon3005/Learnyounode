var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
	// console.log(process.argv[3]) outputs md
	// console.log(path.extname(file)) outputs list of extensions
	list.forEach(function (file) {
         if (path.extname(file) === '.' + process.argv[3])
           console.log(file)
    })
})