// var calc = require('./calc.js')
// result = calc.add(4,5)
// diference = calc.sub(10,5)
// console.log("output " + result)
// console.log("difference is " + difference)

const express = require('express');
const app = express();

app.get('/ruto/:id', function(req, res) {
    const id = req.params.id;
    res.send("Hey president! " + id);
});

app.listen(9000, function() {
    console.log('running......');
});
