
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVz5JeXxf6Cfhr9xk91qPH-CVuCQzmuvU",
  authDomain: "student-519e5.firebaseapp.com",
  projectId: "student-519e5",
  storageBucket: "student-519e5.appspot.com",
  messagingSenderId: "865688394213",
  appId: "1:865688394213:web:d6b6781b0e6bd1c6a7f70c",
  measurementId: "G-F3220FN9GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var express = require('express');
var ap = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
var task =[];

var complete = ["finish jquery"];
//addtask
app.post('/submit', function (req, res) {
  var Name= req.body.name;
  var eMAIL= req.body.email;
  var phnum=req.body.number;
  var bg=req.body.blood;
  task.push(Name);
  task.push(eMAIL);
  task.push(phnum);
  task.push(bg);
  res.redirect("/");
});

app.get("/", function(req, res) {    
  res.render("index", { task: task, complete: complete });
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
});

