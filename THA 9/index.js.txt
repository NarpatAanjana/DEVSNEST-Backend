//-------------------------------------------------------- DAY - 9 -- SENDING STATIC FILES ---------------------------------------------------------------//

// -------------------------------------------- THA - SEND DIFFERENT FILES WITH QUERY --------------------------------------------------------------//


// TO RUN NODEMON IN OTHER WAY -
// ./node_modules/nodemon/bin/nodemon.js index.js


const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname);

app.use('/', (req, res)=>{

    res.sendFile(path.join(__dirname, "public/hello.txt"), 'test.txt');

    res.sendFile(path.join(__dirname, "public/test.json"));

    res.download(path.join(__dirname, "public/test.json"), "hello.json");

    res.sendFile(path.join(__dirname, "public/man.jpg"));

    res.download(path.join(__dirname, "public/man.jpg"), "theman.jpg");

})

// listens to a port
app.listen(2000);