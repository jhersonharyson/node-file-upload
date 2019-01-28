const routes = require('express').Router()
const multer = require('multer');
const multerConfig = require('./config/multer')


routes.post("/posts", multer(multerConfig).single('file'), (req, res, next) => {
    console.log(req.file)
    res.status(200).json({ hello: "world" });
})

module.exports = routes