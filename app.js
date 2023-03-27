const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = 5151

app.get('/', function (req, res) {
    res.send(`Hello world, welcome to our project. Server is running on port ${port}`);
})

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
