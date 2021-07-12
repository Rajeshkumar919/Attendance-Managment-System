// const express=require("express")
// const router=express.Router();
// const mysql=require('mysql')

// const cors = require('cors')
// const app=express();
// app.use(express.json());
// app.use(cors());


// const db=mysql.createPool({
//  host: 'localhost',
//  user: 'root',

//  password: '',
//  database: 'attendancemanagmentsystem'
// });
// app.get('/register/all', async(req,res,next)=>{
//     try{
//         let results=await db.all();
//         res.json(results);
//     }catch(e){
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

// app.post('/register',(req,res)=>{
//     const email=req.body.eml;
//     const password=req.body.pass;
//     const re_password=req.body.re_pass;
    
//     db.query("INSERT INTO register (email,password,re-password) VALUES (?,?,?)",
//      [email,password,re_password],
//      (err,result)=>{
//          console.log(err);
//      }
//      );
// });
// app.post('/login',(req,res)=>{
//     const email=req.body.eml;
//     const password=req.body.pass;
//     const re_password=req.body.re_pass;
    
//     db.query("SELECT * FROM register WHERE email = ? AND password=?",
//      [email,password,password],
//      (err,result)=>{
//          if(err){
//          res.send({err: err})
//          }
         
        
//              if(result.length>0){
//                  res.send(result);
//              }
//              else{
//                  res.send({message: "wrong email/password combination!"});
//              }
//          }
     
//      );

// });

// app.get('/',(req,res)=>{
//     if(db.conne)
// })



// app.listen(3001,()=>{
//     console.log("running on port 3001");
// });
var mysql = require('mysql');
const bodyParser = require('body-parser')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "attendancemanagmentsystem"
  
  });

const express = require('express');
const app = express();
app.use(bodyParser.json())
var cors = require('cors')

app.use(cors())

app.get('/allStudents', (req, res) => {
    if(con.connect)
    {
        con.query("select * from attendance",(err,row,fields)=>
        {
            res.json(row)
        })
    }
})
app.get('/login', (req, res) => {
    if(con.connect)
    {
        con.query("select * from register",(err,row,fields)=>
        {
            res.json(row)
        })
    }
})
app.listen(3001, () => {
    console.log("started the server");
}
)