
module.exports = function (req, res) { 
    res.send("Here's your query: " + req.originalUrl.slice(17))
}