const express=require('express')
const app = express();
const mongoose =require('mongoose');
const {routes}=require('./routes/route');
const {server}=require('socket.io');
const signup=require('./models/signup');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log(`DB is connect with server`)}).catch(()=>{console.log("DB connection failed...")});

app.use('/', routes);

app.listen(process.env.PORT,()=>{console.log(`Express server is running successfully at ${process.env.PORT}`)});



