'use strict'
const mongoose = require('mongoose');
const fs = require('fs')
const path = require('path')
const { promisify } = require('util');

const PostSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    size: {
        type: Number, 
        required: true
    },
    key: {
        type: String, 
        required: true
    },
    url: {
        type: String, 
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    }
})

PostSchema.pre('remove',function(){
    console.log("23132132121321");
    
    return promisify(fs.unlink)(path.resolve(__dirname,'..', '..','tmp', 'uploads', this.key))
})

module.exports = mongoose.model('Post', PostSchema)

