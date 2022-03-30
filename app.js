const express =require('express');
const path = require ('path');
const cors = require('cors');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://chhama:parmar@cluster0.fznjr.mongodb.net/signupANDsingin?retryWrites=true&w=majority");
const indexRouter = require ('./routes/index');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.listen(3000,()=>{
    console.log("server started");
});
module.exports=app;