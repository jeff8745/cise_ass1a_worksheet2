const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

const server = express();

const articles = require("./dummydata/articles");

server.get('/', (req, res) => {
    res.send("API is running");
});

server.get('/api/articles', (req, res) => {
    res.json(articles);
})

server.get('/api/articles/:id', (req, res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
})

server.listen(5000, console.log(`Server is working and listening PORT ${PORT}`));