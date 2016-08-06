var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var createSession = require('./server/script/session');
var routes = require('./server/routes/app.routes');
var app = express();
app.use('/client',express.static(path.join(__dirname,'client')));
app.use('/node_modules',express.static(path.join(__dirname,'node_modules')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

createSession(app);
routes(app);

app.listen(3000,function(req,res){
    console.log('app is running at port 3000')
})
