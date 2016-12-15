var router = require('./routerModel');
var express = require('express');
var app = express();

//将路由模块挂载到/router;
app.use('/router',router);

app.listen(8088);
