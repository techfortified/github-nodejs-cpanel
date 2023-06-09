const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = 5150

app.get('/', function (req, res) {
    res.send(`Welcome to techfortified. Server is running on port ${port}`);
})

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
