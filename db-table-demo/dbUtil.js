var mysql = require('mysql');
var pool = mysql.createPool({
    localAddress:'127.0.0.1',
    database:'school',
    port:'3306',
    user:'root',
    password:'900512',
});

function queryAllResult(callback){
    pool.getConnection(function(err,connection){
        if(err){
            console.log("GetConnection err : " + err);
        }else{
            connection.query('select * from students',function(err,rows){
                var array = new Array();
                for(var pos in rows){
                    var person = {};
                    person['id'] = rows[pos].id;
                    person['name'] = rows[pos].name;
                    person['age'] = rows[pos].age;
                    // printObj(person);
                    array.push(person);
                }
                if(callback != null){
                    callback(array);
                }
                connection.release();    
            });
        }
    })
}

function insert(obj,callback){
    pool.getConnection(function(err,connection){
        if(err){
            console.log("GetConnection err:" + err);
        }else{
            var sql = 'insert into students (id,name,age) values (' + obj.id + ',' + obj.name + ',' + obj.age +')';
            connection.query(sql,function(err,rows){
                for(var pos in rows){
                    printObj(rows[pos]);
                }
            });
        }
    });
}


/**
 * 打印对象
 */
function printObj(obj){
	var output = "";
	for(var i in obj){  
		var property=obj[i];  
		output+=i+" = "+property+"\n"; 
	}  
	console.log(output);
}

module.exports = {
    query:queryAllResult,
    printO:printObj,
    insert:insert,
}