//模块化可挂载的路由句柄
var express = require('express');
var router = express.Router();

router.use(function time(req,res,next){
    console.log('time:',Date.now());
    next();
});

//定义主页路由
router.get('/',function(req,res){
    res.send('main page router');
});

//定义about页面的路由
router.get('/about',function(req,res){
    res.send('about router');
});

//定义成外部模块
module.exports = router;