const { rejects } = require('assert');
const sql=require('mysql2');
const { resolve } = require('path');

const con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'api'
});

con.connect(err =>{
    if(err)
        {
            console.log("database not connected..");
            return;
        }
        console.log('database connected sucessfully..')

})


module.exports=con;