var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(response) {
	response.pipe(bl(function(err, data){
		if (err)
			return console.error(data)
		data = data.toString()
		console.log(data.length)
		console.log(data)	
	}))
})


// alternative long-winded solution
/*http = require("http");
var info = [];

http.get(process.argv[2],function(res){
    res.setEncoding('utf8');
    res.on("data",function(input){
        info.push(input);
    });
    res.on("error",console.error);
    res.on("end",function(){
        console.log(info.join(""));
    });
});*/