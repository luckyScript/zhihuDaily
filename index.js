var express = require('express');
var app = express();
var http = require("http");
var http = require("http");
var bodyParser = require('body-parser')

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var data = '';
var r = http.request("http://news-at.zhihu.com/api/4/news/latest", function(res) {
    res.on("data", function(chunk) {
        data += chunk.toString('utf8').trim();
    });
}).on("error", function(e) {
    console.log(e.message);
});
r.end();

app.get('/zhihudata',function(req,res) {
	console.log('请求');
	res.send(data);
})

app.post('/detail',function(req,res) {
	var detail = '';
	var id = req.body.id;
	console.log(id);
	var r = http.request("http://news-at.zhihu.com/api/4/news/"+id, function(re) {
	    re.on("data", function(chunk) {
	        detail += chunk.toString('utf8').trim();
	        //console.log(detail);
	    });
	}).on("error", function(e) {
	    console.log(e.message);
	});
	r.end();
	setTimeout(function() {
		res.send(detail);
	},200)
})

app.listen('3000',function() {
	console.log('server start');
})