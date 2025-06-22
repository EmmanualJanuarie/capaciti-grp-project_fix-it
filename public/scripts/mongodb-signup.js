const MongoClient = require('mongodb').MongoClient;

//varibles for signup inputs
const flname = document.getElementById('flname').value;//full-name

const email = document.getElementById('signup_email').value;//email

const pwd = document.getElementById('signup_pwd').value;//pwd

const tel = document.getElementById('tel').value;//tel

// Url for mongodb
const url = "mongodb://localhost:27017/";

// Establishing the connection db
MongoClient.connect(url, function(err, db){
    // Connection check
    if(err) throw err;
    var dbo = db.db("fixit_DB");//establishing the DB

    // Testing obj
    var myObj = {
        fullname: flname, email_address: email, password: pwd, cellphone_num: tel
    };

    // Inserting collection
    dbo.collection("Users").insertOne(myObj, function(err, res){
        if(err)throw err;
        console.log("Inserting one data");
        db.close();
    });
});


