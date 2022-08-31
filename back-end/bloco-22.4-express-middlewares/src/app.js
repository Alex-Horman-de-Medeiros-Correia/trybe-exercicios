const express = require('express');

const { getBlogPostFile } = require('./utils/readAndWriteFiles');

const app = express();

app.use(express.json());

app.get('/blog-posts', async (req, res) => {
    const posts = await getBlogPostFile();

    return res.status(200).json(posts);
});

module.exports = app;
