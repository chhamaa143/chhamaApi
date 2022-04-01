const express =require('express');
const app = express();
const path = require ('path');
const cors = require('cors');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://chhama:parmar@cluster0.fznjr.mongodb.net/signupANDsingin?retryWrites=true&w=majority");
app.use(cors());

const indexRouter = require ('./routes/index');
const categoryRoute = require('./routes/category');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/category',categoryRoute);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server started");
});
