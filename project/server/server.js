const express = require('express');
const app = new express();
const userAgentRouter = require('./src/routes/userAgentRouter');
const userAgentMiddleware = require('./src/middleware/userAgentMiddleware');
const cors = require('cors');
const path = require("path");

app.use(cors());
app.use(userAgentMiddleware);
app.use('/ua', userAgentRouter);
app.use('/', express.static(path.resolve('./client')));
app.get('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'))
});


app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));
