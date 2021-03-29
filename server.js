const md5 = require('md5');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.get('/md5/:string', function (req, res) {
    if (!req.params.string)
      res.status(200).send('ERRO');
    
    res.status(200).send(md5(req.params.string));
})
app.listen(port);
console.log('server started ' + port);
