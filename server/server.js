const express = require('express');
const apiRouter=require('./routes');
const app = express();

app.use('/api/users',apiRouter);
app.use('/', apiRouter);

app.listen(process.env.PORT || '3000', () => {
    console.log("My Server is Running")
});