var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var ImageSearchService = require('./api/ImageSearchService.js')
var mongo = require('mongo')
var db = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/imageSearch'

mongo.connect(db, function (err, data) {
    if (err) throw err;

    app.get('/api/imagesearch/*', ImageSearchService)

    app.get('/', function (req, res) {
        res.send('hello from index')
    })

    app.listen(port)
    console.log('listening on port ' + port)

});