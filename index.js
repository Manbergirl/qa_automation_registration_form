var express = require('express');
var app = express();
const http = require('http');

app.get('/', function(req, res){
    res.sendFile('mockup.html', { root: __dirname });

});

app.use('/vendor', express.static('vendor'))
app.use('/js', express.static('js'))
app.use('/css', express.static('css'))


app.listen(3000,function(){
    console.log('listening on : 3000');
});