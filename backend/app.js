// will hold the express app
const express = require('express');
const bodyParser = require('body-parser');

// express app is a big chain of middleware we apply to the incoming requests
const app = express();

// this will return a valid express middleware for parsing json data
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log('post logged', post);
  // status for ok - new resource created
  res.status(201).json({
    message: "Post added successfully"
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
    id: 1,
    title: "Title coming from server",
    content: 'Content coming from server'
    },
    {
      id: 2,
      title: "2 Title coming from server",
      content: '2 Content coming from server'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});


module.exports = app;
