const mysql=require('mysql');

const pool=mysql.createPool({
    password: '',
    user: 'root',
    database: 'attendancemanagmentsystem',
    host: 'localhost',
    port: '3306'
});
let users={};
users.all=()=>{
    return new Promise((resolve,reject)=>{
        pool.query(`SELECT * FROM users`,(err,results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
        });
    });

};
users.one=(cms)=>{
    return new Promise((resolve,reject)=>{
        pool.query(`SELECT * FROM users WHERE cms=?`,[cms],(err,results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results[0]);
        });
    });


}
module.exports=users;
