var dbutil = require('./dbUtil');
dbutil.query(function(array){
    for(var i in array){
        dbutil.printO(array[i]);
    }
});