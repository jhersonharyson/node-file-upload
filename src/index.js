const express = require('express')
const morgan  = require('morgan') 
const mongoose = require('mongoose')




const app =  express();
const routes = require('./routes')
/** 
 * 
 * Database setup
 * 
 **/
/**
 * cache mongoose 
 * delete mongoose.models['User'];
 * delete mongoose.connection.collections['users'];
 * delete mongoose.modelSchemas['User'];
 */
delete mongoose.models['User'];
delete mongoose.connection.collections['users'];
delete mongoose.modelSchemas['User'];
mongoose.connect('mongodb://node123:node123@ds119503.mlab.com:19503/node-upload',{
    useNewUrlParser: true,
});
mongoose.set('useCreateIndex', true);

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use(routes)

app.listen(3000);
