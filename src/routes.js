'use strict'
const routes = require('express').Router()
const multer = require('multer');
const multerConfig = require('./config/multer')


const Post = require('./models/Post');

routes.post("/posts", multer(multerConfig).single('file'), async (req, res, next) =>  {
    try {
        const { originalname: name, size, filename: key } = req.file
        const post = new Post({name, size, key, url: 'asdasd'}); 
        await post.save()
        console.log(post);
        res.status(200).send(post);
    } catch (error) {
        res.status(403).send({message: error});
    }
})

routes.delete("/delete/:id", async (req, res, next) =>  {
    try {
        const id = req.params.id
        const post = await Post.findOne({key: id})
        console.log(id);
        await post.remove();
        res.status(200).send(post);
    } catch (error) {
        res.status(403).send({message: error});
    }
})

routes.get("/uploads", async (req, res, next) =>  {
    try {
        const post = await Post.find({})
        console.log(post);
        res.status(200).send(post);
    } catch (error) {
        res.status(403).send({message: error});
    }
})

module.exports = routes