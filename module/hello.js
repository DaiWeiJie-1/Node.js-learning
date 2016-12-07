function helloMethod(s){
    console.log("Hi:" + s);
}

//将该方法设置成外部模块
module.exports = helloMethod;