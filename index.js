const express = require('express');
const  app = express();
const bodyParser = require('body-parser');
const db = require('./config/mongoose')

const uploadRouter = require('./routes/upload')
const dataRouter = require('./routes/data')
const userRouter = require('./routes/user')
app.use(bodyParser.json());
const PORT = 8080;

app.use('/api/user',userRouter)
app.use('/api',dataRouter)
app.use('/api/upload',uploadRouter)


app.listen(PORT)
