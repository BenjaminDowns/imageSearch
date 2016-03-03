var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var mongoose = require('mongoose');
var db = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/imageSearch'

var searchHistory = new Schema({
    search-terms: String,
    time: Date;
})

var ImageSearchService = require('./api/ImageSearchService.js')

mongo.connect(db, function (err, data) {
    if (err) throw err;

    app.route('/api/imagesearch/*')
        .get(ImageSearchService);

    app.get('/', function (req, res) {
        res.send('hello from index')
    })

    app.listen(port)
    console.log('listening on port ' + port)
});