var db = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/imageSearch'

module.exports = function (req, res) {
    res.send("Here's your query: " + req.originalUrl.slice(17))
    // var collection = db.collection['searches']

    // collection.count(function (err, data) {
    //     if (err) throw err
    //     res.send("here's how many entries you have: " + data)
    // })

}
