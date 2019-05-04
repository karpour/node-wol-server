var wol = require('wol');
var express = require('express');
var app = express();
var port = 30001;

var server = app.listen(port);

app.get('/wake', function (req, res) {
    console.log(req);
    data = "TESTT";
    console.log(data);
    res.end(data);
})

console.log("Test");

wol.wake('20:DE:20:DE:20:DE', function (err, res) {
    console.log(res);
});